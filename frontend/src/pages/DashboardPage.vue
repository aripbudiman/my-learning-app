<script setup>
import Navbar from '../components/Navbar.vue';
import BoxTemplate from '../templates/BoxTemplate.vue';
import BoxCourse from '../components/BoxCourse.vue';
import BoxAchievement from '../components/BoxAchievement.vue';
</script>
<template>
    <Navbar>
        <template #title>Coding Journey</template>
    </Navbar>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BoxTemplate />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-slate-900">Your Courses</h2>
                    <div
                        class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-blue-100 text-blue-700">
                        4 Courses
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BoxCourse v-for="i in 4" :key="i" />
                </div>
            </div>
            <div>
                <h2 class="text-2xl font-bold text-slate-900 mb-6">Achievements</h2>
                <div class="space-y-4">
                    <BoxAchievement v-for="i in 4" :key="i" />
                </div>
            </div>
        </div>
    </div>
</template>