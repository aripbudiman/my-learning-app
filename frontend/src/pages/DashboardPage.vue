<script setup>
import Navbar from '../components/Navbar.vue';
import BoxTemplate from '../templates/BoxTemplate.vue';
import BookOpen from '../assets/icons/BookOpen.vue';
import Clock from '../assets/icons/Clock.vue';
import Play from '../assets/icons/Play.vue';    
</script>
<template>
    <Navbar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BoxTemplate />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-slate-900">Your Courses</h2>
                    <div
                        class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-blue-100 text-blue-700">
                        4 Courses</div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="i in 5" :key="i"
                        class="rounded-xl border bg-card text-card-foreground shadow hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        <div class="flex flex-col space-y-1.5 p-6 pb-3">
                            <div
                                class="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-2xl mb-3">
                                🌐</div>
                            <div class="font-semibold tracking-tight text-xl">HTML &amp; CSS</div>
                            <div class="text-sm text-slate-600">Learn the fundamentals of web development with HTML and
                                CSS
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <div class="space-y-4">
                                <div class="flex items-center justify-between text-sm text-slate-600">
                                    <div class="flex items-center space-x-4">
                                        <span class="flex items-center">
                                            <BookOpen />
                                            lessons
                                        </span>
                                        <span class="flex items-center">
                                            <Clock></Clock>
                                            16 hours
                                        </span>
                                    </div>
                                    <div
                                        class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                        Beginner
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex justify-between text-sm">
                                        <span class="text-slate-600">Progress</span>
                                        <span class="font-medium">40%</span>
                                    </div>
                                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar"
                                        data-state="indeterminate" data-max="100"
                                        class="relative w-full overflow-hidden rounded-full bg-primary/20 h-2">
                                        <div data-state="indeterminate" data-max="100"
                                            class="h-full w-full flex-1 bg-primary transition-all"
                                            style="transform: translateX(-60%);"></div>
                                    </div>
                                </div>
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full group-hover:shadow-md transition-all duration-200">
                                    <Play />
                                    Continue Learning
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>