<script setup>
import { Icon } from '@iconify/vue'

defineProps({
    course: {
        type: Object,
        required: true,
    },
})

defineEmits(['addLesson', 'editLesson', 'deleteLesson'])
</script>

<template>
    <div class="rounded-xl border bg-card text-card-foreground shadow">
        <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center space-x-3">
                <div
                    class="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-xl"
                >
                    {{ course.icon || '🌐' }}
                </div>
                <div>
                    <div class="font-semibold leading-none tracking-tight">{{ course.name }}</div>
                    <div class="text-sm text-muted-foreground">
                        {{ course.lessonCount || 0 }} lessons across {{ course.batches?.length || 0 }} batches
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 pt-0">
            <div class="space-y-6">
                <!-- Batch sections -->
                <div
                    v-for="batch in course.batches"
                    :key="batch.id"
                    class="rounded-xl bg-card text-card-foreground shadow border border-slate-200"
                >
                    <div class="flex flex-col space-y-1.5 p-6 pb-3">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="font-semibold tracking-tight text-lg">
                                    {{ batch.name }}
                                </div>
                                <div class="text-sm text-muted-foreground">
                                    {{ batch.lessons?.length || 0 }} lessons
                                </div>
                            </div>
                            <button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                                @click="$emit('addLesson', batch)"
                            >
                                <Icon icon="lucide:plus" width="24" height="24" class="w-4 h-4 mr-2" />
                                Add Lesson
                            </button>
                        </div>
                    </div>
                    <div class="p-6 pt-0">
                        <!-- Lessons grid -->
                        <div
                            v-if="batch.lessons && batch.lessons.length > 0"
                            class="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            <div
                                v-for="lesson in batch.lessons"
                                :key="lesson.id"
                                class="rounded-xl bg-card text-card-foreground shadow border border-slate-100 hover:shadow-md transition-shadow"
                            >
                                <div class="p-4">
                                    <div class="flex items-start justify-between mb-2">
                                        <div class="flex-1">
                                            <h4 class="font-medium text-slate-900 mb-1">
                                                {{ lesson.title }}
                                            </h4>
                                            <p class="text-sm text-slate-600 mb-2 line-clamp-2">
                                                {{ lesson.description }}
                                            </p>
                                            <div class="flex items-center space-x-3 text-xs text-slate-500">
                                                <div
                                                    class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize"
                                                >
                                                    {{ lesson.category }}
                                                </div>
                                                <div class="flex items-center space-x-1">
                                                    <Icon
                                                        icon="lucide:award"
                                                        width="12"
                                                        height="12"
                                                        class="w-3 h-3"
                                                        aria-hidden="true"
                                                    />
                                                    <span>{{ lesson.points || 0 }} pts</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex space-x-1 ml-2">
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                                                @click="$emit('editLesson', lesson)"
                                            >
                                                <Icon
                                                    icon="lucide:square-pen"
                                                    width="12"
                                                    height="12"
                                                    class="w-3 h-3"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                            <button
                                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                                                @click="$emit('deleteLesson', lesson)"
                                            >
                                                <Icon
                                                    icon="lucide:trash-2"
                                                    width="12"
                                                    height="12"
                                                    class="w-3 h-3 text-red-500"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div v-if="lesson.challenge" class="bg-slate-50 rounded p-2 mt-2">
                                        <p class="text-xs text-slate-600 line-clamp-2">
                                            <Icon
                                                icon="lucide:code"
                                                width="12"
                                                height="12"
                                                class="w-3 h-3 inline mr-1"
                                                aria-hidden="true"
                                            />
                                            {{ lesson.challenge }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Empty state -->
                        <div v-else class="text-center py-6">
                            <Icon
                                icon="lucide:circle-play"
                                width="48"
                                height="48"
                                class="w-12 h-12 text-slate-400 mx-auto mb-3"
                                aria-hidden="true"
                            />
                            <p class="text-slate-500">No lessons created for this batch yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
