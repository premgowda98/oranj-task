
<template>
    <div class="border-1 rounded-lg p-5 px-10 pt-8 flex flex-col gap-5 bg-gray-50 h-max min-w-lg" v-if="card_details.length>0">
        <div class="flex flex-row justify-between">
            <div class="flex flex-col gap-2">
                <p class="font-semibold text-xl">Cart Details</p>
                <p class="text-gray-500 text-sm">You have {{ card_details.length }} itesm in your cast</p>
            </div>
            <div>
                <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M845.4 383H758c-16.6 0-30-13.4-30-30s13.4-30 30-30h87.4c16.6 0 30 13.4 30 30s-13.5 30-30 30zM662.3 383H263.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h399.2c16.6 0 30 13.4 30 30s-13.5 30-30 30z" fill="#33CC99"></path><path d="M433.2 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"></path><path d="M854.5 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"></path><path d="M889.8 722.1h-511c-37.7 0-68.4-30.7-68.4-68.4v-1.4L274.5 270v-0.2-0.2l-6-55.4c-8.6-86.8-57.6-117.5-97.3-128.1L101.5 69c-16.1-4-32.3 5.9-36.3 22s5.9 32.3 22 36.3l68.9 16.9c16.2 4.3 28.1 12.4 36.6 24.7 8.6 12.4 14 29.7 16.1 51.4l6 55.6 35.6 379.3c0.8 70.1 58.1 126.9 128.4 126.9h511c16.6 0 30-13.4 30-30s-13.4-30-30-30z" fill="#000000"></path><path d="M840.3 197.8H381c-16.6 0-30 13.4-30 30s13.4 30 30 30h459.3c30.2 0 54.9 24.3 55.5 54.3l-19.9 226.5-0.1 1.3v1.3c0 30.6-24.9 55.5-55.5 55.5H436c-16.6 0-30 13.4-30 30s13.4 30 30 30h384.3c63.2 0 114.7-51.1 115.5-114.1L955.7 316l0.1-1.3v-1.3c0-63.8-51.8-115.6-115.5-115.6z" fill="#000000"></path><path d="M408.5 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1zM823.1 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1z" fill="#000000"></path></g></svg>
            </div>
        </div>
        <hr />
        <div class="flex flex-col gap-6">
            <div v-for="(each_order, index) in card_details" class="flex flex-col">
                <div class="flex flex-col gap-2">
                    <div class="flex flex-row justify-between items-center">
                        <p class="text-lg font-medium mb-2">{{ each_order['title'] }}</p>
                        <svg @click="delete_item_cart(each_order['id'])" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="cursor-pointer"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#f20d0d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#f20d0d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#f20d0d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#f20d0d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#f20d0d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                    </div>
                    <div class="flex flex-row justify-between">
                        <p>Quantity</p>
                        <p class="font-medium">{{ each_order['quantity'] }} units</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p>Amount</p>
                        <p class="font-medium">$ {{ Number(each_order['total_price']).toLocaleString('en-US') }}</p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div class="flex flex-col gap-3">
            <div class="flex flex-row justify-between">
                <p class="text-lg font-medium">Sub Total</p>
                <p class="font-medium">(+) $ {{ Number(sub_total).toLocaleString('en-US') }}</p>
            </div>
            <div class="flex flex-row justify-between">
                <p class="text-lg font-medium">Discount (10%)</p>
                <p class="font-medium">(-) $ {{ Number(discount).toLocaleString('en-US') }}</p>
            </div>
        </div>
        <hr />
        <div>
            <div class="flex flex-row justify-between">
                <p class="text-lg font-medium">Total </p>
                <p class="text-lg font-medium">$ {{ Number(total_price).toLocaleString('en-US') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const cart_details = useCart()  

    const props = defineProps(['card_details', 'discount', 'total_price', 'sub_total'])

    const delete_item_cart = (id)=>{
        cart_details.value = cart_details.value.filter((element)=>{
        return element['id'] != id
    })
}


</script>