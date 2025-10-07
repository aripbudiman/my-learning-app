<script setup>
import BatchCard from './BatchCard.vue'
import { Icon } from '@iconify/vue'

defineProps({
    course: {
        type: Object,
        required: true,
    },
})

defineEmits(['editBatch', 'deleteBatch'])
</script>

<template>
    <div class="rounded-xl border bg-card text-card-foreground shadow">
        <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center space-x-3">
                <div :class="`course-icon ${course.colorTheme}`">
                    <Icon :icon="course.icon" width="40" height="40" />
                </div>
                <div>
                    <div class="font-semibold leading-none tracking-tight">{{ course.nameCourse }}</div>
                    <div class="text-sm text-muted-foreground">{{ course.totalBatches || 0 }} batches</div>
                </div>
            </div>
        </div>
        <div class="p-6 pt-0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BatchCard
                    v-for="batch in course.modules"
                    :key="batch.id"
                    :batch="batch"
                    @edit="$emit('editBatch', batch)"
                    @delete="$emit('deleteBatch', batch)"
                />
            </div>
        </div>
    </div>
</template>
<style scoped>
.course-icon {
    @apply w-12 h-12 rounded-lg bg-gradient-to-r flex items-center justify-center text-2xl text-white;
}
</style>
