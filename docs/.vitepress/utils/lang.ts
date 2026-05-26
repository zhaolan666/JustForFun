import fs from 'fs'
import path from 'path'
import { docRoot } from '@justforfun-ui/build-utils'

// Support both crowdin directory and direct zh-CN directory
export const languages = ['en-US', 'zh-CN']

export const ensureLang = (lang: string) => `/${lang}`

export const getLang = (id: string) => {
  // Check if path contains zh-CN
  if (id.includes('/zh-CN/')) {
    return 'zh-CN'
  }
  return 'en-US'
}
