<template>
    <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <a href="/" class="flex items-center">
                    <div class="flex items-center space-x-3">
                        <div
                            class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-xl">P</span>
                        </div>
                        <span class="font-bold text-xl text-gray-800">Pinter</span>
                    </div>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/courses" class="text-gray-700 hover:text-blue-600 font-medium transition">Kursus</a>
                    <a href="/exercises" class="text-gray-700 hover:text-blue-600 font-medium transition">Latihan</a>
                    <a href="#progress" class="text-gray-700 hover:text-blue-600 font-medium transition">Progres</a>
                    <a href="#features" class="text-gray-700 hover:text-blue-600 font-medium transition">Fitur</a>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Mulai
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button onclick="toggleMobileMenu()" class="text-gray-700 hover:text-blue-600">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-2 space-y-2">
                <a href="#courses" class="block py-2 text-gray-700 hover:text-blue-600">Kursus</a>
                <a href="#exercises" class="block py-2 text-gray-700 hover:text-blue-600">Latihan</a>
                <a href="#progress" class="block py-2 text-gray-700 hover:text-blue-600">Progress</a>
                <a href="#features" class="block py-2 text-gray-700 hover:text-blue-600">Fitur</a>
                <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Mulai
                </button>
            </div>
        </div>
    </nav>
</template>