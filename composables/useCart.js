import { useStorage } from '@vueuse/core'

export const useCart = ()=> useStorage('cartInfo', ()=>[])