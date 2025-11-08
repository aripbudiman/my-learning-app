<script setup>
import { Icon } from '@iconify/vue'
import BatchSection from './BatchSection.vue'

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
                    class="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                    :class="'bg-gradient-to-r ' + (course.colorTheme || 'from-orange-400 to-red-500')"
                >
                    <Icon v-if="course.icon && course.icon.includes(':')" :icon="course.icon" width="34" height="34" />
                    <span v-else class="text-xl">{{ course.icon || '🌐' }}</span>
                </div>
                <div>
                    <div class="font-semibold leading-none tracking-tight">{{ course.nameCourse }}</div>
                    <div class="text-sm text-muted-foreground">
                        {{ course.totalLessons || 0 }} lessons across {{ course.modules?.length || 0 }} batches
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 pt-0">
            <div class="space-y-6">
                <BatchSection
                    v-for="batch in course.modules"
                    :key="batch.id"
                    :batch="batch"
                    @add-lesson="$emit('addLesson', batch)"
                    @edit-lesson="$emit('editLesson', $event)"
                    @delete-lesson="$emit('deleteLesson', $event)"
                />
            </div>
        </div>
    </div>
</template>
