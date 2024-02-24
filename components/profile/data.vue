<template>
    <div v-if="data_present">
        <div class="mx-auto max-w-xl flex flex-col items-center my-10">
            <div>
                <p class="text-4xl font-medium">Purchase History</p>
            </div>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-12">
                    <thead class="text-lg text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 ">
                                Project
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800" v-for="(product, index) in all_brought_products">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ product['title'] }}
                            </th>
                            <td class="px-6 py-4">
                                {{ product['quantity'] }}
                            </td>
                            <td class="px-6 py-4">
                                $ {{ Number(product ['total_price']).toLocaleString('en-US')}}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" class="px-6 py-3 text-base">Total</th>
                            <td class="px-6 py-3">{{ total_quantity }}</td>
                            <td class="px-6 py-3">$ {{ Number(total_price).toLocaleString('en-US')}}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    </div>
    <div v-else class="flex flex-col mx-auto text-center gap-10 items-center p-40">
        <h1 class="text-5xl font-bold">No have not purchased any carbon credits</h1>
        <NuxtLink to="/">
            <button class="border-2 bg-blue-500 p-2 rounded-lg text-white hover:opacity-75">Browse Now</button>
        </NuxtLink>
    </div>

</template>

<script setup>

    const user = useCookie('userinfo')
    const useremail = useCookie('useremail')
    const userData = useAccountData()
    const data_present = ref(true)
    const total_quantity = ref(0)
    const total_price = ref(0)

    watch(userData, ()=>{
        if (userData.length>0){
            data_present.value = true
        }
    })

    const all_brought_products = computed(()=>{

        if (!user.value || userData.value.length==0){
            data_present.value = false

            return []

        }

        return userData.value.filter((element)=>{
            total_quantity.value += element['quantity']
            total_price.value += element['total_price']
            return element['email'] === useremail.value
        })
    })

</script>