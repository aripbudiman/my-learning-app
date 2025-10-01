<script setup>
import { Icon } from "@iconify/vue";
import Navbar from '../components/Navbar.vue';
import BoxAdmin from '../templates/BoxAdmin.vue';
</script>
<template>
    <Navbar>
        <template #title>Admin Panel</template>
    </Navbar>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div role="tablist" aria-orientation="horizontal"
            class="h-9 items-center justify-center rounded-lg p-1 text-muted-foreground grid w-full grid-cols-4 bg-white shadow-sm mb-10"
            tabindex="0" data-orientation="horizontal" style="outline: none;">
            <button type="button" role="tab" aria-selected="true" data-state="active"
                class="justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow flex items-center space-x-2">
                <Icon icon="lucide:chart-column" width="17" height="17" class="text-gray-500" />
                <span>Overview</span>
            </button>
            <button type="button" role="tab" aria-selected="false" data-state="inactive"
                class="justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow flex items-center space-x-2">
                <Icon icon="lucide:book-open" width="17" height="17" class="text-gray-500" />
                <span>Courses</span>
            </button>
            <button type="button" role="tab" aria-selected="false" data-state="inactive"
                class="justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow flex items-center space-x-2">
                <Icon icon="fluent:layer-24-regular" width="23" height="23" class="text-gray-500" />
                <span>Batches</span>
            </button>
            <button type="button" role="tab" aria-selected="false" data-state="inactive"
                class="justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow flex items-center space-x-2">
                <Icon icon="heroicons-outline:play" width="23" height="23" class="text-gray-500" />
                <span>Lessons</span>
            </button>
        </div>
        <BoxAdmin />
        <div class="rounded-xl border bg-card text-card-foreground shadow">
            <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold leading-none tracking-tight">Quick Actions</div>
                <div class="text-sm text-muted-foreground">Common tasks to manage your content</div>
            </div>
            <div class="p-6 pt-0">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 h-20 flex-col space-y-2">
                        <Icon icon="mdi:plus" width="24" height="24" />
                        <span>Add New Course</span>
                    </button>
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 h-20 flex-col space-y-2">
                        <Icon icon="mdi:plus" width="24" height="24" />
                        <span>Create Batch</span>
                    </button>
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 h-20 flex-col space-y-2">
                        <Icon icon="mdi:plus" width="24" height="24" />
                        <span>Add Lesson</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="rounded-xl border bg-card text-card-foreground shadow mt-10">
            <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold leading-none tracking-tight">Recent Activity</div>
                <div class="text-sm text-muted-foreground">Latest changes to your content</div>
            </div>
            <div class="p-6 pt-0">
                <div class="space-y-4">
                    <div class="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
                        <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-book-open w-4 h-4 text-green-600"
                                aria-hidden="true">
                                <path d="M12 7v14"></path>
                                <path
                                    d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                </path>
                            </svg></div>
                        <div class="flex-1">
                            <p class="font-medium text-slate-900">HTML &amp; CSS course updated</p>
                            <p class="text-sm text-slate-600">2 hours ago</p>
                        </div>
                        <div
                            class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            Course</div>
                    </div>
                    <div class="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
                        <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-circle-play w-4 h-4 text-blue-600"
                                aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                            </svg></div>
                        <div class="flex-1">
                            <p class="font-medium text-slate-900">New lesson added to JavaScript Batch I</p>
                            <p class="text-sm text-slate-600">5 hours ago</p>
                        </div>
                        <div
                            class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            Lesson</div>
                    </div>
                    <div class="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
                        <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-layers w-4 h-4 text-purple-600"
                                aria-hidden="true">
                                <path
                                    d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z">
                                </path>
                                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12">
                                </path>
                                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17">
                                </path>
                            </svg></div>
                        <div class="flex-1">
                            <p class="font-medium text-slate-900">Python Batch III published</p>
                            <p class="text-sm text-slate-600">1 day ago</p>
                        </div>
                        <div
                            class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            Batch</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
