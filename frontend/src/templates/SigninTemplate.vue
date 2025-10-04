<script setup>
import SocialButtonTemplate from './SocialButtonTemplate.vue';
import InputGroup from '../components/InputGroup.vue';
import RememberComponent from '../components/RememberComponent.vue';
</script>
<template>
    <SocialButtonTemplate title="Welcome Back" description="Sign in to continue your learning progress
" />
    <div class="relative">
        <div class="absolute inset-0 flex items-center">
            <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full">
            </div>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-white px-2 text-slate-500">Or
                continue with email</span>
        </div>
    </div>
    <form class="space-y-4">
        <InputGroup label="Email" placeholder="Enter your email" />
        <InputGroup label="Password" type="password" placeholder="Enter your password" />
        <RememberComponent />
        <button
            class="inline-flex text-white items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 w-full h-12 text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            type="submit">Sign In
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-arrow-right w-4 h-4 ml-2" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg>
        </button>
    </form>
</template>