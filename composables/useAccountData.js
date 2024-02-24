import { useStorage } from '@vueuse/core'

export const useAccountData = ()=> useStorage('useAccountData', ()=>[])