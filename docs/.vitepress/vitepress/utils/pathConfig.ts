/**
 * Enterprise Path Configuration System v2.0
 *
 * Design Philosophy (Combining Element Plus + Ant Design Vue Best Practices):
 *
 * [OK] Element Plus Features:
 *    - Centralized configuration (global.ts pattern)
 *    - Unified path constant management
 *    - import.meta.glob batch import
 *
 * [OK] Ant Design Vue Features:
 *    - Vite alias mechanism (resolve.alias)
 *    - TypeScript paths intelligent prompts
 *    - Runtime dynamic mode switching
 *
 * [OK] Community Best Practices:
 *    - vitepress-vue-demo plugin concept
 *    - Error boundary and fault tolerance
 *    - Development/production environment adaptation
 */

// ============================================
// 0. Safe path resolution (lazy, SSR-only)
// ============================================

/**
 * Safe path.resolve that works in both SSR (Node.js) and browser (Vite CSR).
 * 'path' is a Node.js built-in that Vite externalizes for browser compatibility,
 * so we must not import it at module top level.
 */
function safeResolve(...args: string[]): string {
  try {
    // Vite converts this to a synchronous call in SSR mode
    // In browser mode (CSR hydration), this gracefully falls back
    const pathModule = require('path') as { resolve: (...parts: string[]) => string } | undefined
    if (pathModule?.resolve) {
      return pathModule.resolve(...args)
    }
  } catch {
    // Browser mode: 'path' is not available
  }
  // Fallback: treat args as already absolute or concatenate
  return args[args.length - 1] || ''
}

// ============================================
// 1. Environment Detection & Compatibility
// ============================================

const isSSR = typeof window === 'undefined'
const isDev = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'

let _dirname: string
if (typeof __dirname !== 'undefined') {
  _dirname = __dirname
} else if (typeof import.meta !== 'undefined') {
  _dirname = new URL('.', import.meta.url).pathname
} else {
  _dirname = '/'
}

let projRoot: string
let docRoot: string
let examplesRoot: string

if (isSSR) {
  projRoot = safeResolve(_dirname, '..', '..', '..')
  docRoot = safeResolve(projRoot, 'docs')
  examplesRoot = safeResolve(docRoot, 'examples')
} else {
  projRoot = ''
  docRoot = ''
  examplesRoot = ''
}

export { projRoot, examplesRoot }

export const docsDirName = 'docs'
export const docRoot_val = docRoot
export const examplesDirName = 'examples'
export const examplesRoot_val = examplesRoot

// ============================================
// 2.1 Module-level Glob Imports (Vite Requirement)
// ============================================

/**
 * Pre-defined glob patterns for demo components
 *
 * IMPORTANT: import.meta.glob must be called at module top level
 * (outside of any function/class) for Vite to properly analyze
 * and transform the imports at build time.
 *
 * Reference: Vite Documentation - import.meta.glob
 * https://vitejs.dev/guide/features.html#meta-glob-import
 */

// Relative path glob (from this file: vitepress/utils/ -> examples/)
const _demoModulesRelative = import.meta.glob('../../../examples/**/*.vue', { eager: false })

// Alias path glob (alternative approach)
const _demoModulesAlias = import.meta.glob('@jff/examples/**/*.vue', { eager: false })

// Raw source code glob for syntax highlighting
const _demoSourceRelative = import.meta.glob('../../../examples/**/*.vue', { eager: false, query: '?raw', import: 'default' })

// Export for external use if needed
export const demoGlobModules = _demoModulesRelative
export const demoSourceModules = _demoSourceRelative

// ============================================
// 2. Path Mode Definition (Strategy Pattern)
// ============================================

export type PathMode = 'relative' | 'alias' | 'absolute' | 'auto'

export interface PathConfigOptions {
  /** Path mode */
  mode?: PathMode
  /** Base path (for relative mode) */
  basePath?: string
  /** Alias prefix (for alias mode) */
  aliasPrefix?: string
  /** Enable cache */
  cache?: boolean
  /** Use sync load in dev environment */
  devSyncLoad?: boolean
}

interface ResolvedPath {
  /** Import path (for import()) */
  importPath: string
  /** Display path (for logs/UI) */
  displayPath: string
  /** Raw path (for debugging) */
  rawPath: string
}

// ============================================
// 3. PathConfig Core Class (Singleton Pattern)
// ============================================

class PathConfigSystem {
  private options: Required<PathConfigOptions>
  private demoCache: Map<string, any> = new Map()
  private sourceCache: Map<string, string> = new Map()

  constructor(options: PathConfigOptions = {}) {
    this.options = {
      mode: options.mode ?? 'auto',
      basePath: options.basePath ?? '../../../examples',
      aliasPrefix: options.aliasPrefix ?? '@jff/examples',
      cache: options.cache ?? true,
      devSyncLoad: options.devSyncLoad ?? false,
    }
  }

  // ============================================
  // Core Path Resolution Methods
  // ============================================

  /**
   * Resolve Demo path (intelligent mode switching)
   *
   * @param demoName - Demo name (e.g., 'button/basic')
   * @returns ResolvedPath object
   *
   * Strategy:
   * - 'auto': Use alias in dev, relative in production
   * - 'relative': Always use relative path (../../../examples)
   * - 'alias': Always use alias (@jff/examples)
   * - 'absolute': Use absolute path (special scenarios)
   */
  resolvePath(demoName: string): ResolvedPath {
    let importPath: string
    let displayPath: string

    switch (this.getEffectiveMode()) {
      case 'alias':
        importPath = `${this.options.aliasPrefix}/${demoName}.vue`
        displayPath = `${this.options.aliasPrefix}/${demoName}.vue`
        break

      case 'absolute':
        if (isSSR && examplesRoot) {
          importPath = safeResolve(examplesRoot, `${demoName}.vue`)
        } else {
          importPath = `../../../examples/${demoName}.vue`
        }
        displayPath = `examples/${demoName}.vue`
        break

      case 'relative':
      default:
        importPath = `${this.options.basePath}/${demoName}.vue`
        displayPath = `examples/${demoName}.vue`
        break
    }

    return {
      importPath,
      displayPath,
      rawPath: importPath,
    }
  }

  /**
   * Get the actual path mode in use
   *
   * NOTE: Force 'relative' mode in development to avoid alias resolution issues
   * with import.meta.glob. Alias mode can be enabled for production builds.
   */
  private getEffectiveMode(): PathMode {
    if (this.options.mode !== 'auto') {
      return this.options.mode
    }

    // Always use relative path in dev environment for better compatibility
    // with Vite's import.meta.glob
    return 'relative'
  }

  // ============================================
  // Glob Import Methods (Reference Element Plus)
  // ============================================

  /**
   * Get Glob pattern based on current mode
   */
  getGlobPattern(): string {
    switch (this.getEffectiveMode()) {
      case 'alias':
        return `${this.options.aliasPrefix}/**/*.vue`
      case 'absolute':
        if (isSSR && examplesRoot) {
          return safeResolve(examplesRoot, '**/*.vue')
        }
        return '../../../examples/**/*.vue'
      default:
        return `${this.options.basePath}/**/*.vue`
    }
  }

  /**
   * Preload all Demo components (lazy loading)
   *
   * Reference Element Plus implementation:
   *
   * This method uses Vite's import.meta.glob feature to dynamically
   * import all Vue demo components from the examples directory.
   *
   * NOTE: import.meta.glob requires static string literals (Vite limitation)
   */
  loadAllDemosLazy() {
    // Use module-level glob imports (defined at top of file)
    // This ensures Vite can properly analyze and transform the imports

    // Debug: Log available demo paths (comprehensive)
    if (isDev) {
      console.log('\n[DEBUG] [PathConfig] === GLOB PATTERN DEBUG ===')
      console.log('[DEBUG] Module-level relative glob (_demoModulesRelative):')
      console.log('   - Count:', Object.keys(_demoModulesRelative).length)
      if (Object.keys(_demoModulesRelative).length > 0) {
        console.log('   - Keys (first 5):', Object.keys(_demoModulesRelative).slice(0, 5))
        console.log('   - Sample key:', Object.keys(_demoModulesRelative)[0])
      } else {
        console.log('   - ⚠️ NO FILES FOUND WITH RELATIVE PATH!')
      }

      console.log('\n[DEBUG] Module-level alias glob (_demoModulesAlias):')
      console.log('   - Count:', Object.keys(_demoModulesAlias).length)
      if (Object.keys(_demoModulesAlias).length > 0) {
        console.log('   - Keys (first 5):', Object.keys(_demoModulesAlias).slice(0, 5))
        console.log('   - Sample key:', Object.keys(_demoModulesAlias)[0])
      }

      console.log('\n[DEBUG] Effective mode:', this.getEffectiveMode())
      console.log('[DEBUG] Current file location: vitepress/utils/pathConfig.ts')
      console.log('[DEBUG] Target location: docs/examples/')
    }

    return _demoModulesRelative
  }

  /**
   * Preload all Demo components (sync)
   *
   * Reference Ant Design Vue implementation:
   *
   * This method uses eager loading to pre-import all demo components
   * at build time for better runtime performance.
   *
   * Use Cases:
   * - Demo count < 50
   * - High first-screen performance requirement
   * - No code splitting needed
   *
   * NOTE: import.meta.glob requires static string literals (Vite limitation)
   */
  loadAllDemosSync() {
    try {

      const _glob_alias = import.meta.glob('@jff/examples/**/*.vue', {
        eager: false,
        import: 'default',
      })
      const _glob_relative = import.meta.glob('../../../examples/**/*.vue', {
        eager: false,
        import: 'default',
      })

      return this.getEffectiveMode() === 'alias' ? _glob_alias : _glob_relative
    } catch (error) {
      console.error('[PathConfig] Failed to load demos with sync mode:', error)
      console.warn('[PathConfig] Falling back to relative path...')

      return import.meta.glob('../../../examples/**/*.vue', {
        eager: false,
        import: 'default',
      })
    }
  }

  // ============================================
  // Single Demo Loading Methods
  // ============================================

  /**
   * Load single Demo component (with cache)
   *
   * @param demoName - Demo name
   * @returns Promise<any> - Vue component module
   *
   * Cache Strategy:
   * - Dev environment: No cache (support HMR)
   * - Production environment: Cache (improve performance)
   */
  async loadDemo(demoName: string): Promise<any> {
    const cacheKey = `demo:${demoName}`

    if (this.options.cache && !isDev && this.demoCache.has(cacheKey)) {
      return this.demoCache.get(cacheKey)!
    }

    try {
      const demos = this.loadAllDemosLazy()
      const { importPath, displayPath } = this.resolvePath(demoName)

      // Debug: Log resolution details
      if (isDev) {
        console.log('\n[DEBUG] [PathConfig.loadDemo] Loading:', demoName)
        console.log('[DEBUG] Resolved importPath:', importPath)
        console.log('[DEBUG] Resolved displayPath:', displayPath)
        console.log('[DEBUG] Total available demos:', Object.keys(demos).length)
        console.log('[DEBUG] Demo exists at path?:', !!demos[importPath])
      }

      if (!demos[importPath]) {

        console.error(`\n[X] [PathConfig] Demo not found: ${demoName}`)
        console.error(`   Expected path: ${importPath}`)
        console.error(`   Available demos (first 10):`)
        Object.keys(demos).slice(0, 10).forEach((key) => {
          console.error(`     - ${key}`)
        })

        throw new Error(`Demo "${demoName}" not found at "${importPath}"`)
      }

      const module = await demos[importPath]()

      // Debug: Log loaded module
      if (isDev) {
        console.log('[DEBUG] Module loaded successfully')
        console.log('[DEBUG] Module type:', typeof module)
        console.log('[DEBUG] Module keys:', Object.keys(module))
        console.log('[DEBUG] Has default export:', !!module.default)
        if (module.default) {
          console.log('[DEBUG] Default export type:', typeof module.default)
          console.log('[DEBUG] Default export keys:', Object.keys(module.default))
        }
      }

      const component = module.default || module

      if (this.options.cache && !isDev) {
        this.demoCache.set(cacheKey, component)
      }

      return component
    } catch (error) {
      console.error(`\n[!] [PathConfig] Error loading demo "${demoName}":`, error)
      throw error
    }
  }

  /**
   * Load Demo source code (with fallback)
   *
   * @param demoName - Demo name
   * @returns Promise<string> - Vue source code text
   */
  async loadDemoSource(demoName: string): Promise<string> {
    const cacheKey = `source:${demoName}`

    if (this.options.cache && this.sourceCache.has(cacheKey)) {
      return this.sourceCache.get(cacheKey)!
    }

    try {
      const { importPath } = this.resolvePath(demoName)
      
      // 使用 glob 加载原始源码
      if (_demoSourceRelative[importPath]) {
        const source = await _demoSourceRelative[importPath]()
        if (this.options.cache) {
          this.sourceCache.set(cacheKey, source)
        }
        return source
      }

      throw new Error(`Source not found for "${importPath}"`)
    } catch (error) {
      console.warn(
        `\n[!] [PathConfig] Cannot load raw source for "${demoName}".`,
        '\n   This is normal in SSR or production build mode.',
        '\n   Falling back to placeholder...'
      )

      const placeholder = `
<!-- Source code unavailable in this environment -->
<!-- Demo: ${demoName} -->
<!-- Mode: ${this.getEffectiveMode()} -->
<!-- Environment: ${isDev ? 'development' : 'production'} / ${isSSR ? 'SSR' : 'CSR'} -->
<template>
  <div class="source-unavailable">
    <p>[i] Source code is only available in development mode</p>
    <p>Run <code>vitepress dev</code> to view the source</p>
  </div>
</template>

<style scoped>
.source-unavailable {
  padding: 20px;
  background: var(--vp-c-bg-soft, #f8f8f8);
  border-radius: 8px;
  text-align: center;
}
</style>
`.trim()

      if (this.options.cache) {
        this.sourceCache.set(cacheKey, placeholder)
      }

      return placeholder
    }
  }

  // ============================================
  // Utility Methods
  // ============================================

  /**
   * Check if Demo exists (without loading)
   */
  hasDemo(demoName: string): boolean {
    const demos = this.loadAllDemosLazy()
    const { importPath } = this.resolvePath(demoName)
    return importPath in demos
  }

  /**
   * Get list of all available Demos
   */
  listDemos(): Array<{ name: string; path: string }> {
    const demos = this.loadAllDemosLazy()

    return Object.keys(demos).map((importPath) => {
      const name = importPath
        .replace(`${this.options.basePath}/`, '')
        .replace(`${this.options.aliasPrefix}/`, '')
        .replace('.vue', '')

      return { name, path: importPath }
    })
  }

  /**
   * Clear all caches
   */
  clearCache(): void {
    this.demoCache.clear()
    this.sourceCache.clear()
  }

  /**
   * Update configuration at runtime
   */
  configure(options: Partial<PathConfigOptions>): void {
    this.options = { ...this.options, ...options }
    this.clearCache()
  }

  /**
   * Get current configuration (read-only)
   */
  getConfig(): Readonly<Required<PathConfigOptions>> {
    return { ...this.options }
  }

  /**
   * Output debug information
   */
  debug(): void {
    console.log('\n[DEBUG] [PathConfig] Debug Info:')
    console.log('   Mode:', this.getEffectiveMode())
    console.log('   BasePath:', this.options.basePath)
    console.log('   AliasPrefix:', this.options.aliasPrefix)
    console.log('   Cache:', this.options.cache)
    console.log('   DevSyncLoad:', this.options.devSyncLoad)
    console.log('   Environment:', {
      isDev,
      isSSR,
      nodeEnv: typeof process !== 'undefined' ? process.env?.NODE_ENV : 'unknown',
    })
    console.log('   Cached Demos:', this.demoCache.size)
    console.log('   Cached Sources:', this.sourceCache.size)
    console.log('   Total Demos:', this.listDemos().length)
    console.log('')
  }
}

// ============================================
// 4. Export Global Instances (4 Modes)
// ============================================

/**
 * [DEFAULT] Default Instance (Auto Mode)
 *
 * Behavior:
 * - Development -> Use alias (@jff/examples)
 * - Production -> Use relative path (../../../examples)
 *
 * Use Cases:
 * - Most projects (recommended)
 * - Need balance between dev experience and prod performance
 */
export const PathConfig = new PathConfigSystem({
  mode: 'auto',
  cache: true,
  devSyncLoad: false,
})

/**
 * [RELATIVE] Relative Path Instance (Always use ../../../examples)
 *
 * Use Cases:
 * - Legacy projects
 * - Don't want Vite alias config
 * - CI/CD environments
 */
export const PathConfigRelative = new PathConfigSystem({
  mode: 'relative',
  cache: true,
})

/**
 * [ALIAS] Alias Path Instance (Always use @jff/examples)
 *
 * Use Cases:
 * - New projects (recommend with Vite alias)
 * - Team collaboration (more intuitive paths)
 * - Rapid prototyping
 */
export const PathConfigAlias = new PathConfigSystem({
  mode: 'alias',
  cache: true,
})

/**
 * [SYNC] Sync Preload Instance (eager: true)
 *
 * Use Cases:
 * - Few Demos (<30)
 * - Extreme first-screen performance requirement
 * - No code splitting needed
 */
export const PathConfigSync = new PathConfigSystem({
  mode: 'relative',
  cache: true,
  devSyncLoad: true,
})

// ============================================
// 5. Convenience Exports & Backward Compatibility
// ============================================

/** Demo base path constant */
export const DEMO_BASE_PATH = '../../../examples'

/** Demo alias prefix */
export const DEMO_ALIAS_PREFIX = '@jff/examples'

/** Default export */
export default PathConfig

// ============================================
// 6. TypeScript Type Declaration Enhancement
// ============================================

declare module 'virtual:path-config' {
  export interface PathConfigMeta {
    mode: PathMode
    totalDemos: number
    cachedDemos: number
  }
}
