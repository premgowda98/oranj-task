<template>
    <div v-if="card_details.length>0" class="flex flex-row justify-center my-8 mb-16">
        <CheckoutOrders style="width:400px;" :card_details="card_details" :discount="discount" :sub_total="subtotal" :total_price="total_price"/>
        <CheckoutPayments :total_price="total_price"/>
    </div>
    <div v-else class="flex flex-col mx-auto text-center gap-10 items-center p-40">
        <h1 class="text-5xl font-bold">No carbon credit projects in your cart</h1>
        <NuxtLink to="/">
            <button class="border-2 bg-blue-500 p-2 rounded-lg text-white hover:opacity-75">Browse Now</button>
        </NuxtLink>
    </div>
    
</template>

<script setup>
    const card_details = useCart()

    let total = 0

    card_details.value.forEach(element => {
        total += element['total_price']
    });

    const subtotal = ref(total)

    const discount = ref(Math.round(subtotal.value*0.1))


    const total_price = ref(total - discount.value)
</script>
