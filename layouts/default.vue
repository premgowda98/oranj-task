<template>
    <div class="mx-auto max-w-screen-2xl bg-white">
        <StaticNavbar />
        <slot></slot>
        <StaticFooter />
    </div>
</template>

<script setup>
    useHead({
        title: 'Oranj',
        link: [{href: '/orange-svgrepo-com.svg', type:'image/x-icon', rel: 'icon'}]
    })

</script>
<style scoped>
    body {
        margin: 0;
        padding: 0;
    }
</style>