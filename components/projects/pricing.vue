<template>
    <div class="border-2 rounded-lg border-slate-300 shadow-xl h-max p-5 w-92 md:w-96 mt-16">
        <div class="flex flex-row justify-between my-6">
            <p class="font-medium text-lg">Pricing</p>
            <p class="font-medium text-lg">${{ price }}/tCO22</p>
        </div>
        <div class="flex flex-row justify-between my-6 items-center">
            <div>
                <p class="font-medium text-lg">Quanity</p>
                <p class="text-xs text-gray-400">Min Quantity: {{ min_quantity }}</p>
            </div>
            <div class="relative flex items-center max-w-[8rem]">
                <button @click="increment_decrement('decr')" type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                    </svg>
                </button>
                <input type="text" id="quantity-input" :value="totalquantity" data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-lg font-semibold focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                <button @click="increment_decrement('incr')" type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="flex flex-row justify-center gap-3 mb-4">
            <button @click="set_credits(300)" class="border-2 rounded-lg border-sky-500 p-1 font-medium hover:text-white hover:bg-black hover:border-black">300 Credits</button>
            <button @click="set_credits(500)" class="border-2 rounded-lg border-sky-500 p-1 font-medium hover:text-white hover:bg-black hover:border-black">500 Credits</button>
            <button @click="set_credits(800)" class="border-2 rounded-lg border-sky-500 p-1 font-medium hover:text-white hover:bg-black hover:border-black">800 Credits</button>
        </div>
        <hr />
        <div class="my-5 flex flex-col gap-3">
            <div class="flex flex-row justify-between">
                <p class="font-medium text-base">Transaction fee</p>
                <p class="font-medium">${{ transaction_fee }}</p>
            </div>
            <div class="flex flex-row justify-between">
                <p class="font-medium text-base">VAT</p>
                <p class="font-medium">${{ vat }}</p>
            </div>
            <div class="flex flex-row justify-between">
                <p class="font-medium text-base">Total</p>
                <p class="font-medium">${{ total_price }}</p>
            </div>
        </div>
        <div class="flex flex-col justify-center my-8">
            <button @click="add_to_cart_button" class="bg-amber-500 flex items-center justify-center w-full gap-3 px-8 py-3 text-base font-medium text-center text-black transition duration-500 ease-in-out transform  rounded-xl hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 mb-4">
                <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M845.4 383H758c-16.6 0-30-13.4-30-30s13.4-30 30-30h87.4c16.6 0 30 13.4 30 30s-13.5 30-30 30zM662.3 383H263.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h399.2c16.6 0 30 13.4 30 30s-13.5 30-30 30z" fill="#33CC99"></path><path d="M433.2 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"></path><path d="M854.5 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"></path><path d="M889.8 722.1h-511c-37.7 0-68.4-30.7-68.4-68.4v-1.4L274.5 270v-0.2-0.2l-6-55.4c-8.6-86.8-57.6-117.5-97.3-128.1L101.5 69c-16.1-4-32.3 5.9-36.3 22s5.9 32.3 22 36.3l68.9 16.9c16.2 4.3 28.1 12.4 36.6 24.7 8.6 12.4 14 29.7 16.1 51.4l6 55.6 35.6 379.3c0.8 70.1 58.1 126.9 128.4 126.9h511c16.6 0 30-13.4 30-30s-13.4-30-30-30z" fill="#000000"></path><path d="M840.3 197.8H381c-16.6 0-30 13.4-30 30s13.4 30 30 30h459.3c30.2 0 54.9 24.3 55.5 54.3l-19.9 226.5-0.1 1.3v1.3c0 30.6-24.9 55.5-55.5 55.5H436c-16.6 0-30 13.4-30 30s13.4 30 30 30h384.3c63.2 0 114.7-51.1 115.5-114.1L955.7 316l0.1-1.3v-1.3c0-63.8-51.8-115.6-115.5-115.6z" fill="#000000"></path><path d="M408.5 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1zM823.1 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1z" fill="#000000"></path></g></svg>
                <p class="text-lg font-medium">Add to Cart</p>
            </button>
            <NuxtLink to="/checkout" class="flex flex-row justify-center items-center">
                <button class="bg-green-500 flex items-center justify-center w-full gap-3 px-8 py-3 text-base font-medium text-center text-black transition duration-500 ease-in-out transform  rounded-xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 ">
                    
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" width="20px" height="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#AFF078;" d="M500.811,180.95C468.734,76.188,371.269,0,256,0C114.616,0,0,114.616,0,256 c0,115.269,76.188,212.734,180.951,244.811L500.811,180.95z"></path> <path style="fill:#5AC779;" d="M512,256c0-26.116-3.921-51.315-11.189-75.05l-54.272-54.272L65.461,385.322l115.489,115.489 C204.686,508.079,229.885,512,256,512C397.385,512,512,397.385,512,256z"></path> <path style="fill:#4A75C3;" d="M456.348,150.261c0-18.365-15.026-33.391-33.391-33.391H256l-44.522,183.652L456.348,256v-61.217 l-60.104-16.696l60.104-16.696V150.261z"></path> <path style="fill:#458FDE;" d="M89.043,116.87c-18.365,0-33.391,15.026-33.391,33.391v11.13l60.104,16.696l-60.104,16.696V256 L256,300.522V116.87H89.043z"></path> <path style="fill:#4D68B5;" d="M456.348,256v105.739c0,18.365-15.026,33.391-33.391,33.391H256l-55.652-69.565L256,256H456.348z"></path> <path style="fill:#4A75C3;" d="M256,256v139.13H89.043c-18.365,0-33.391-15.026-33.391-33.391V256H256z"></path> <polygon style="fill:#2C4290;" points="456.348,161.391 456.348,194.783 256,194.783 222.609,178.087 256,161.391 "></polygon> <rect x="55.652" y="161.391" style="fill:#4F5AA8;" width="200.348" height="33.391"></rect> <rect x="89.043" y="339.478" style="fill:#458FDE;" width="144.696" height="22.261"></rect> <path style="fill:#FFFFFF;" d="M400.696,325.399h-22.261v-63.834c0-12.275-9.986-22.261-22.261-22.261s-22.261,9.986-22.261,22.261 v63.834h-22.261v-63.834c0-24.549,19.972-44.522,44.522-44.522s44.522,19.972,44.522,44.522V325.399z"></path> <polygon style="fill:#E5E5E5;" points="422.957,283.826 422.957,417.391 356.174,417.391 331.89,350.609 356.174,283.826 "></polygon> <rect x="289.391" y="283.826" style="fill:#F2F2F2;" width="66.783" height="133.565"></rect> <polygon style="fill:#B2B2B2;" points="400.696,306.087 400.696,395.13 356.174,395.13 339.985,350.609 356.174,306.087 "></polygon> <rect x="311.652" y="306.087" style="fill:#CCCCCC;" width="44.522" height="89.043"></rect> <rect x="345.043" y="328.348" style="fill:#7F7F7F;" width="22.261" height="44.522"></rect> </g></svg>
                            <p class="text-lg font-medium">Checkout</p>
                    
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

import { useToast } from 'vue-toastification'
const toast = useToast()

const props = defineProps(['min_quantity', 'price'])

const transaction_fee = ref(10)
const vat = ref(2)
const totalquantity = ref(props.min_quantity)

const total_price = computed(()=>{
    return transaction_fee.value + vat.value + (props.price * totalquantity.value)
})

const set_credits = (credit)=>{
    totalquantity.value = credit
}

function increment_decrement(type){

    if (type=='incr'){
        totalquantity.value += 10
    } else {
        totalquantity.value -= 10
    }

    if (totalquantity.value < props.min_quantity){
        totalquantity.value = props.min_quantity 
    }

}

const emits = defineEmits(['emit_cart'])

const add_to_cart_button = ()=>{
    emits('emit_cart', totalquantity.value, total_price.value)
    toast.info('Project added to cart', {
        position: "bottom-right",
        draggable: false,
    })
}

</script>