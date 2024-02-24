<template>
    <div class="flex flex-col items-center">
        <HomeFilter :projectType="projectType" :country="country" @emit_filter="handle_filters_emit" />
        <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <p class="text-4xl text-center mb-8">{{ filiter_project_list.length }} projects found</p>
            <div class="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
                <NuxtLink v-for="(indv_project, index) in filiter_project_list" :key="index" :to="`/projects/${indv_project['slug']}`" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2 mb-8">
                    <div class="flex flex-col h-full">
                        <img :src="indv_project['img_url']" class="object-cover w-full h-48" alt="" />
                        <div class="flex-grow border border-t-0 rounded-b">
                            <div class="px-8 py-2 flex justify-center mt-4">
                                <h2 class="font-semibold leading-5 text-xl">{{ indv_project['title'] }}</h2>
                            </div>
                            <div class="px-8 py-2 flex justify-between mt-3 mx-8">
                                <h6 class="font-semibold leading-5">${{ indv_project['price_per_carbon_unit'] }}/tCO</h6>
                                <h6 class="font-semibold leading-5">Min {{ indv_project['min_quantity'] }} units</h6>
                            </div>
                            <div class="flex justify-center border-2 rounded-2xl bg-blue-600 p-2 my-5 mx-8 text-white">
                                <p class="text-xl">Explore</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const all_projects = useProjects();

const filiter_project_list = ref(all_projects['projects']);

function handle_filters_emit(type, country){
    console.log(type, country)
    if (type=='all' && country=='all'){
        filiter_project_list.value = all_projects['projects']
        return
    }
    if (type=='all'){
        filiter_project_list.value = all_projects['projects']
        filiter_project_list.value = filiter_project_list.value.filter((element)=>{
            return element['country'] === country
        })
        return
    }
    if (country=='all'){
        filiter_project_list.value = all_projects['projects']
        filiter_project_list.value = filiter_project_list.value.filter((element)=>{
            return element['type'] === type
        })
        return
    }


    filiter_project_list.value = filiter_project_list.value.filter((element)=>{
            return element['type'] === type && element['country'] === country
        })    
}

const projectType = ref([])
const country = ref([])

all_projects['projects'].forEach((element)=>{

    if (!projectType.value.includes(element['type'])){
        projectType.value.push(element['type'])
    }

    if (!country.value.includes(element['country'])){
        country.value.push(element['country'])
    }
})

</script>
