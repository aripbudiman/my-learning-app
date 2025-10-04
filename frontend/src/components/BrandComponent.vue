<template>
    <div class="text-center mb-8">
        <div class="inline-flex items-center space-x-3 mb-4">
            <div
                class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-book-open w-7 h-7 text-white" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path
                        d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                    </path>
                </svg>
            </div>
            <h1 class="text-3xl font-bold text-slate-900">
                <slot name="title"></slot>
            </h1>
        </div>
        <p class="text-slate-600">
            <slot name="description"></slot>
        </p>
    </div>
</template>