<template>
    <ProfileData />
</template>

<script setup>

const user = useCookie('userinfo')

onMounted(async ()=>{
    if (!user.value){
    await navigateTo('/login')
}
})

</script>