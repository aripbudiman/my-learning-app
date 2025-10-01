<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
    <header class="bg-white border-b border-slate-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div
                        class="w-10 h-10 bg-gradient-to-r from-purple-500 to-red-600 rounded-lg flex items-center justify-center">
                        <Icon icon="uil:setting" width="24" height="24" class="text-white" />
                    </div>
                    <h1 class="text-2xl font-bold text-slate-900">
                        <slot name="title"></slot>
                    </h1>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="text-right">
                        <p class="text-sm text-slate-600">Welcome back,</p>
                        <p class="font-semibold text-slate-900">John Doe</p>
                    </div>
                    <img alt="John Doe" class="w-10 h-10 rounded-full border-2 border-blue-200"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;h=150&amp;fit=crop&amp;crop=face">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 p-2">
                        <Icon icon="material-symbols:logout-rounded" width="24" height="24" class="text-slate-600" />
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>