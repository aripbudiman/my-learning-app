<script setup>
import IconForm from '../icons/IconForm.vue';
</script>
<template>
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 min-h-screen">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center space-x-4">
                <IconForm width="64" height="64"></IconForm>
                <h1 class="text-4xl md:text-4xl font-semibold text-slate-700">Latihan Soal</h1>
            </div>
            <hr class="my-5 border border-indigo-200">
            <div class="py-5 my-5 flex justify-center space-x-4 bg-indigo-200 rounded-lg">
                <button class="btn">Database</button>
                <button class="btn">Soal Tes</button>
            </div>
        </div>
    </section>
</template>
