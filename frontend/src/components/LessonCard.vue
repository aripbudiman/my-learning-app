<script setup>
import { Icon } from '@iconify/vue'

defineProps({
    lesson: {
        type: Object,
        required: true,
    },
})

defineEmits(['edit', 'delete'])
</script>

<template>
    <div
        class="rounded-xl bg-card text-card-foreground shadow border border-slate-100 hover:shadow-md transition-shadow"
    >
        <div class="p-4">
            <div class="flex items-start justify-between mb-2">
                <div class="flex-1">
                    <h4 class="font-medium text-slate-900 mb-1">
                        {{ lesson.lessonTitle }}
                    </h4>
                    <p class="text-sm text-slate-600 mb-2 line-clamp-1">
                        {{ lesson.description }}
                    </p>
                    <div class="flex items-center space-x-3 text-xs text-slate-500">
                        <div
                            class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize"
                        >
                            {{ lesson.lessonType?.toLowerCase() || 'lesson' }}
                        </div>
                        <div class="flex items-center space-x-1">
                            <Icon icon="lucide:award" width="12" height="12" class="w-3 h-3" aria-hidden="true" />
                            <span>{{ lesson.pointsReward || 0 }} pts</span>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-1 ml-2">
                    <button
                        @click="$emit('edit', lesson)"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                    >
                        <Icon icon="lucide:square-pen" width="12" height="12" class="w-3 h-3" aria-hidden="true" />
                    </button>
                    <button
                        @click="$emit('delete', lesson)"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
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
            <div v-if="lesson.instructions" class="bg-slate-50 rounded p-2 mt-2">
                <p class="text-xs text-slate-600 line-clamp-1">
                    <Icon icon="lucide:code" width="12" height="12" class="w-3 h-3 inline mr-1" aria-hidden="true" />
                    {{ lesson.instructions }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
