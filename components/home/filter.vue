<template>
<div class="m-10 w-screen max-w-screen-md">
  <div class="flex flex-col">
    <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <form class="" @submit.prevent>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div class="flex flex-col">
            <label for="project_type" class="text-sm font-medium text-stone-600">Project Type</label>
            <select 
              v-model="selected_project_type"  
              id="project_type" 
              class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option value="all">All</option>
              <option v-for="(type, index) in props.projectType" :key="index" :value="type">{{ type }}</option>
            </select>
          </div>

          <div class="flex flex-col">
            <label for="country" class="text-sm font-medium text-stone-600">Country</label>

            <select
              v-model="selected_country"
              id="country" 
              class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option value="all">All</option>
              <option v-for="(countr, index) in props.country" :key="index" :value="countr">{{ countr }}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>

</div>
</template>

<script setup>

const selected_project_type = ref('all')
const selected_country = ref('all')


const props = defineProps({
  projectType: Array,
  country: Array
})

const emits = defineEmits(['emit_filter'])

watch([selected_project_type, selected_country], ()=>{
  emits('emit_filter',selected_project_type.value, selected_country.value)
})
</script>