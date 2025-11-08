<script setup>
import { Icon } from '@iconify/vue'
import LessonCard from './LessonCard.vue'

defineProps({
    batch: {
        type: Object,
        required: true,
    },
})

defineEmits(['addLesson', 'editLesson', 'deleteLesson'])
</script>

<template>
    <div class="rounded-xl bg-card text-card-foreground shadow border border-slate-200">
        <div class="flex flex-col space-y-1.5 p-6 pb-3">
            <div class="flex items-center justify-between">
                <div>
                    <div class="font-semibold tracking-tight text-lg">
                        {{ batch.batchTitle }}
                    </div>
                    <div class="text-sm text-muted-foreground">{{ batch.lessons?.length || 0 }} lessons</div>
                </div>
                <button
                    @click="$emit('addLesson', batch)"
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                >
                    <Icon icon="lucide:plus" width="24" height="24" class="w-4 h-4 mr-2" />
                    Add Lesson
                </button>
            </div>
        </div>
        <div class="p-6 pt-0">
            <!-- Lessons grid -->
            <div v-if="batch.lessons && batch.lessons.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LessonCard
                    v-for="lesson in batch.lessons"
                    :key="lesson.id"
                    :lesson="lesson"
                    @edit="$emit('editLesson', lesson)"
                    @delete="$emit('deleteLesson', lesson)"
                />
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
</template>
