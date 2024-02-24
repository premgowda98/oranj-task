<template>
    <div class="max-w-full bg-cover flex flex-row gap-9 mb-10 mx-5 md:mx-20 mt-1">
        <div>
            <div >
                <NuxtLink to="/">
                    <button class="flex flex-row gap-2 border-2 text-blue-500 bg-white hover:bg-blue-600 hover:text-white rounded-xl p-1 px-4 text-lg items-center mb-5">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                        <p >Back</p>
                    </button>
                </NuxtLink>
            </div>
            <div class="flex flex-col md:flex-row">
                <div>
                    <div>
                        <h1 class="normal-case text-5xl font-mono text-black mb-8">{{ project_info['title'] }}</h1>
                    </div>
                    <div class="flex items-center justify-center ">
                        <img :src="project_info['img_url']" :alt="project_info['title']" class="w-8/12 md:m-w-max h-full mb-10">
                    </div>
                    <div class="max-w-3xl mx-10">
                        <p class="text-wrap my-3 mb-5 text-xl leading-8">{{ project_info['short_description1'] }}</p>
                        <h4 class="text-3xl mb-10 mt-8 font-semibold">Understanding Climate Change</h4>
                        <p class="text-xl text-wrap leading-8">{{ project_info['short_description2'] }}</p>
                        <h5 class="text-3xl mb-10 mt-10 font-semibold" >The Role of ESG in Climate Change Mitigation</h5>
                        <div v-for="(each_point, index) in project_info['points']" :key=index>
                            <ul>
                                <p class="text-xl my-6 font-medium" >{{ each_point['title'] }}</p>
                                <li class="text-xl text-wrap leading-8" v-for="(subpoint, index) in each_point['subpoints']">
                                    {{ subpoint }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ProjectsPricing class="my-16 mx-8" 
                :price="project_info['price_per_carbon_unit']"  
                :min_quantity="project_info['min_quantity']"
                @emit_cart="add_item_to_cart"/>

            </div>
        </div>

    </div>

</template>

<script setup>
const cart_details = useCart()

const route = useRoute()
const all_projects = useProjects();

const get_project = all_projects['projects'].filter((element)=>{
    return element['slug']==route.params.slug
})

const project_info = ref(get_project[0])

function generateRandomId(length = 8) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}

const add_item_to_cart = (quantity, price)=>{
    const random_id = generateRandomId()

    const cart_object = {
        id: random_id,
        title: project_info.value['title'],
        quantity: quantity,
        total_price: price
    }

    cart_details.value.push(cart_object)
}


</script>