import type { Plugin } from 'vite'

export const ApiTableContainer = {}

export default function apiTable(): Plugin {
  return {
    name: 'api-table',
  }
}
