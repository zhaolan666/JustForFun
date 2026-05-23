# Install

## Environment Preparation

### Node.js Version

JustForFun-UI requires Node.js version >= 18.0.0.

```bash
# Check Node.js version
node -v
# v18.17.0 or higher is recommended
```

### Package Manager

We recommend using `pnpm` for better performance and monorepo support:

```bash
# Install pnpm
npm install -g pnpm

# Check pnpm version
pnpm -v
```

## Mirror Source Configuration

For faster package installation in China, you can configure npm/pnpm mirror sources.

### Using nrm (Recommended)

```bash
# Install nrm
npm install -g nrm

# View available sources
nrm ls
# * npm ------------ https://registry.npmjs.org/
# yarn ------------ https://registry.yarnpkg.com/
# tencent --------- https://mirrors.cloud.tencent.com/npm/
# cnpm ------------ https://r.cnpmjs.org/
# taobao ---------- https://registry.npmmirror.com/
```

### Switch to Taobao Mirror

```bash
# Switch to taobao mirror
nrm use taobao

# Verify
nrm ls
# taobao ---------- https://registry.npmmirror.com/ *
```

### pnpm Configuration

```bash
# Configure pnpm mirror
pnpm config set registry https://registry.npmmirror.com/

# Verify configuration
pnpm config get registry
# https://registry.npmmirror.com/
```

## Dependencies

JustForFun-UI has the following peer dependencies:

| Package | Version | Required |
|---------|---------|----------|
| Vue | >= 3.3.0 | ✅ |
| TypeScript | >= 5.0.0 | Optional |
| Vite | >= 4.0.0 | Recommended |

## Installation Check

After installation, verify everything is set up correctly:

```bash
# Check Vue version
pnpm list vue

# Check TypeScript version (if using TypeScript)
pnpm list typescript
```
