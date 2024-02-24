<template>
    <div
        class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8"
    >
        <div class="relative flex items-center justify-between">
            <NuxtLink
                to="/"
                class="inline-flex items-center"
                >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8596 6.80422C13.1527 5.90212 14.0002 5.25 15 5.25V3.75C13.884 3.75 12.8819 4.23749 12.1949 5.01113C11.6511 4.2478 10.7587 3.75 9.75 3.75H8.25V5.25C8.25 6.08469 8.59088 6.83976 9.14102 7.38359C6.84229 8.45993 5.25 10.794 5.25 13.5C5.25 17.2279 8.27208 20.25 12 20.25C15.7279 20.25 18.75 17.2279 18.75 13.5C18.75 10.0633 16.1816 7.22647 12.8596 6.80422ZM12 8.25C9.10051 8.25 6.75 10.6005 6.75 13.5C6.75 16.3995 9.10051 18.75 12 18.75C14.8995 18.75 17.25 16.3995 17.25 13.5C17.25 10.6005 14.8995 8.25 12 8.25ZM14.25 13.5C14.25 12.2574 13.2426 11.25 12 11.25V9.75C14.0711 9.75 15.75 11.4289 15.75 13.5H14.25ZM11.25 6.75C10.4216 6.75 9.75 6.07843 9.75 5.25C10.5784 5.25 11.25 5.92157 11.25 6.75Z" fill="#2563eb"></path> </g></svg>
                <span
                    class="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase"
                    >Oranj</span
                >
            </NuxtLink>
            <ul class="flex items-center space-x-8 lg:flex">
                <li>
                    <NuxtLink
                    to="/checkout"
                    class="text-2xl flex flex-row items-center gap-3 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                    <span class="relative inline-block">
                        <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M845.4 383H758c-16.6 0-30-13.4-30-30s13.4-30 30-30h87.4c16.6 0 30 13.4 30 30s-13.5 30-30 30zM662.3 383H263.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h399.2c16.6 0 30 13.4 30 30s-13.5 30-30 30z" fill="#33CC99"></path><path d="M433.2 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"></path><path d="M854.5 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"></path><path d="M889.8 722.1h-511c-37.7 0-68.4-30.7-68.4-68.4v-1.4L274.5 270v-0.2-0.2l-6-55.4c-8.6-86.8-57.6-117.5-97.3-128.1L101.5 69c-16.1-4-32.3 5.9-36.3 22s5.9 32.3 22 36.3l68.9 16.9c16.2 4.3 28.1 12.4 36.6 24.7 8.6 12.4 14 29.7 16.1 51.4l6 55.6 35.6 379.3c0.8 70.1 58.1 126.9 128.4 126.9h511c16.6 0 30-13.4 30-30s-13.4-30-30-30z" fill="#000000"></path><path d="M840.3 197.8H381c-16.6 0-30 13.4-30 30s13.4 30 30 30h459.3c30.2 0 54.9 24.3 55.5 54.3l-19.9 226.5-0.1 1.3v1.3c0 30.6-24.9 55.5-55.5 55.5H436c-16.6 0-30 13.4-30 30s13.4 30 30 30h384.3c63.2 0 114.7-51.1 115.5-114.1L955.7 316l0.1-1.3v-1.3c0-63.8-51.8-115.6-115.5-115.6z" fill="#000000"></path><path d="M408.5 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1zM823.1 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1z" fill="#000000"></path></g></svg>
                        <span v-if="cart_value.length>0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            {{cart_value.length}}
                        </span>
                    </span>
                    <p>Cart</p>
                    </NuxtLink>
                </li>
                <li v-if="logged_in">
                    <NuxtLink
                        to="/profile"
                        class="text-2xl flex flex-row items-center gap-3 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                        <span class="relative inline-block">
                            <svg viewBox="0 0 32 32" width="30px" height="30px" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Home"></g> <g id="Print"></g> <g id="Mail"></g> <g id="Camera"></g> <g id="Video"></g> <g id="Film"></g> <g id="Message"></g> <g id="Telephone"></g> <g id="User"> <path d="M21.6,17c2.1-1.6,3.4-4.2,3.4-7c0-5-4-9-9-9s-9,4-9,9c0,2.8,1.3,5.4,3.4,7C5.2,17.3,1,21.7,1,27v3 c0,0.5,0.5,1,1,1h14h14c0.5,0,1-0.5,1-1v-3C31,21.7,26.8,17.3,21.6,17z" fill="#FFC10A"></path> <path d="M21.6,17c-1.5,1.2-3.5,2-5.6,2s-4.1-0.7-5.6-2C5.2,17.3,1,21.7,1,27v3c0,0.5,0.5,1,1,1h14h14 c0.5,0,1-0.5,1-1v-3C31,21.7,26.8,17.3,21.6,17z" fill="#2197F3"></path> </g> <g id="File"></g> <g id="Folder"></g> <g id="Map"></g> <g id="Download"></g> <g id="Upload"></g> <g id="Video_Recorder"></g> <g id="Schedule"></g> <g id="Cart"></g> <g id="Setting"></g> <g id="Search"></g> <g id="Pencils"></g> <g id="Group"></g> <g id="Record"></g> <g id="Headphone"></g> <g id="Music_Player"></g> <g id="Sound_On"></g> <g id="Sound_Off"></g> <g id="Lock"></g> <g id="Lock_open"></g> <g id="Love"></g> <g id="Favorite"></g> <g id="Film_1_"></g> <g id="Music"></g> <g id="Puzzle"></g> <g id="Turn_Off"></g> <g id="Book"></g> <g id="Save"></g> <g id="Reload"></g> <g id="Trash"></g> <g id="Tag"></g> <g id="Link"></g> <g id="Like"></g> <g id="Bad"></g> <g id="Gallery"></g> <g id="Add"></g> <g id="Close"></g> <g id="Forward"></g> <g id="Back"></g> <g id="Buy"></g> <g id="Mac"></g> <g id="Laptop"></g> </g></svg>
                        </span>
                        <p>My Account</p>
                    </NuxtLink>
                </li>
                <li>
                    <button @click="navigation"
                        class="bg inline-flex items-center justify-center h-12 px-6 font-medium text-lg tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                    >
                    {{ (logged_in)? 'Log Out' : 'Log In'}}
                </button>
                </li>
            </ul>
            <div class="lg:hidden">
            <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                @click="isMenuOpen = true"
            >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
                </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <div>
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                        <svg
                        class="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke="currentColor"
                        fill="none"
                        >
                        <rect x="3" y="1" width="7" height="12"></rect>
                        <rect x="3" y="17" width="7" height="6"></rect>
                        <rect x="14" y="1" width="7" height="6"></rect>
                        <rect x="14" y="11" width="7" height="12"></rect>
                        </svg>
                        <span
                        class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                        >Company</span
                        >
                    </a>
                    </div>
                    <div>
                    <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        @click="isMenuOpen = false"
                    >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        ></path>
                        </svg>
                    </button>
                    </div>
                </div>
                <nav>
                    <ul class="space-y-4">
                    <li>
                        <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >Product</a
                        >
                    </li>
                    <li>
                        <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >Features</a
                        >
                    </li>
                    <li>
                        <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >Pricing</a
                        >
                    </li>
                    <li>
                        <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >About us</a
                        >
                    </li>
                    <li>
                        <a
                        href="/"
                        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                        >
                        Login
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            </div>
        </div>
        </div>
    </template>

<script setup>

const isMenuOpen = ref(false)

const cart_value = useCart()
const user = useCookie('userinfo')

const logged_in = computed(()=>{
    if (user.value){
        return true
    }
    return false
})

const navigation = async ()=>{

    if (logged_in.value){
        user.value = false
        await navigateTo('/')
    } else {
        await navigateTo('/login')
    }
}

</script>
