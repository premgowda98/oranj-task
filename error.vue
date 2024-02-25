<template>
    <NuxtLayout >
        <div class="mt-7 max-w-lg mx-auto text-center ">
            <p class="mt-7 text-5xl font-bold">{{error.statusCode}}</p>
            <p class="mt-7 text-3   xl">{{error.message}}</p>
            <button class="bg-blue-500 my-7 text-3xl text-white p-2 rounded-lg hover:bg-white hover:text-blue-500 border-2" @click="handleError">Go Home...</button>
        </div>

    </NuxtLayout>
  </template>
  
  <script setup>
    defineProps({
      error: Object
    })
  
    const handleError = () => {
        clearError() // clearError({redirect:'/'}) will work outside of NuxtLayout
        navigateTo('/')
    }
  </script>