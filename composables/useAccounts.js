import { useStorage } from '@vueuse/core'

export const useAccounts = ()=> useStorage('userAccounts', ()=>[])