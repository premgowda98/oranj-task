<template>
    <section>
        <div class="flex flex-col justify-center min- pt-4 pb-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 class="mt-6 text-3xl text-center text-dark-600 font-bold">Sign in to your account</h2>
            </div>

            <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="px-4 py-8 sm:px-10">
                    <form class="space-y-6" action="#" @submit.prevent>
                        <div>
                            <label for="email" class="block text-lg font-medium text-gray-700"> Email address </label>
                            <div class="mt-1">
                                <input id="email" v-model="user_email" required name="email" type="email" autocomplete="email"  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-lg font-medium text-gray-700">  {{ (!create_mode) ? 'Password':'Create Password' }}  </label>
                            <div class="mt-1">
                                <input id="password" v-model="user_password" required name="password" type="password" autocomplete="current-password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <span for="remember-me" class="block ml-2 text-sm text-neutral-600"> {{ (!create_mode) ? "Don't have an account?" : 'Already have an account?'}} </span>
                            </div>

                            <div class="text-sm mx-2">
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500 underline" @click="create_mode=!create_mode"> {{ (!create_mode) ? 'Sign Up' : 'Log In' }} </a>
                            </div>
                        </div>

                        <div>
                            <button @click="create_login_action" type="button" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                {{ (!create_mode)?'Sign In':'Create Account' }} </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useToast } from 'vue-toastification'

    const user = useCookie('userinfo')

    onMounted(async ()=>{
        if (user.value){
            await navigateTo('/profile')
        }
    })

    watch(user, async ()=>{
        if (user.value){
            await navigateTo('/profile')
        }
    })

    const user_accounts = useAccounts();
    const toast = useToast();

    const create_mode = ref(false);
    const user_email = ref(null);
    const user_password = ref(null);

    const add_account = ()=>{
        const user_object = {
                [user_email.value] : {
                    password: user_password.value,
                    projects_owned: []
                }
        }
        user_accounts.value.push(user_object)

        toast.success('Account Created Successfully', {
                        position: "bottom-right",
                        draggable: false,
                    })
        create_mode.value = false
    }

    const create_login_action = ()=>{

        if (!user_email.value){
            toast.warning('Please fill the details', {
                            position: "bottom-right",
                            draggable: false,
            })

            return
        }
        
        if (create_mode.value){
            if (user_accounts.value.length>0){

                user_accounts.value.forEach((element)=>{
                    if (user_email.value in element){
                        toast.warning('Account Already exists', {
                            position: "bottom-right",
                            draggable: false,
                        })
                    } else {
                        add_account()
                    } 
                })
            } else {
                add_account()
            }
            
        } else {
            if (user_accounts.value.length>0){

                user_accounts.value.forEach((element)=>{
                    if (user_email.value in element){

                        if (element[user_email.value].password===user_password.value){
                            toast.success('Logged In Successfully', {
                                position: "bottom-right",
                                draggable: false,
                            })

                            const user = useCookie(
                                'userinfo', {
                                    watch: true
                                }
                            )

                            user.value = true

                            
                            const useremail = useCookie(
                                'useremail', {
                                    watch: true
                                }
                            )

                            useremail.value = user_email.value

                        } else {
                            toast.warning('Incorrect Password', {
                            position: "bottom-right",
                            draggable: false,
                        })
                        }
                    }
                })
            } else {
                toast.warning('Account does not exists', {
                            position: "bottom-right",
                            draggable: false,
                        })
            }
        }
    }
</script>