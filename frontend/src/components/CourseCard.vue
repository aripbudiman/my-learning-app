<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Course {
    id: string
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
    totalLessons: number
}

defineProps<{
    course: Course
}>()

const emit = defineEmits<{
    edit: [course: Course]
    delete: [course: Course]
}>()

const handleEdit = (course: Course) => {
    emit('edit', course)
}

const handleDelete = (course: Course) => {
    emit('delete', course)
}
</script>

<template>
    <div class="rounded-xl border bg-card text-card-foreground shadow hover:shadow-lg transition-all duration-200">
        <div class="p-6">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <div :class="`course-icon ${course.colorTheme}`">
                        <Icon :icon="course.icon" width="64" height="42" class="text-white" />
                    </div>
                    <div>
                        <h3 class="font-semibold text-slate-900">{{ course.nameCourse }}</h3>
                        <p class="text-sm text-slate-600 line-clamp-1">
                            {{ course.description }}
                        </p>
                    </div>
                </div>
                <div class="flex space-x-1">
                    <button
                        @click="handleEdit(course)"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                    >
                        <Icon icon="lucide:square-pen" width="24" height="24" />
                    </button>
                    <button
                        @click="handleDelete(course)"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                    >
                        <Icon icon="lucide:trash-2" width="24" height="24" class="w-4 h-4 text-red-500" />
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="flex items-center space-x-2">
                    <Icon icon="lucide:book-open" width="24" height="24" class="w-4 h-4 text-slate-400" />
                    <span>{{ course.totalLessons }} lessons</span>
                </div>
                <div class="flex items-center space-x-2">
                    <Icon icon="lucide:users" width="24" height="24" class="w-4 h-4 text-slate-400" />
                    <span>0 students</span>
                </div>
                <div class="flex items-center space-x-2">
                    <Icon icon="lucide:star" width="24" height="24" class="w-4 h-4 text-slate-400" />
                    <span>4.8/5</span>
                </div>
            </div>
            <div class="mt-4 flex items-center justify-between">
                <div class="text-sm text-slate-500">Progress: 42%</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.course-icon {
    @apply w-12 h-12 rounded-lg bg-gradient-to-r flex items-center justify-center text-2xl;
}
</style>
