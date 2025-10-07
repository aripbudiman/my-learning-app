<script setup>
import { Icon } from '@iconify/vue'

defineProps({
    batch: {
        type: Object,
        required: true,
    },
})

defineEmits(['edit', 'delete'])
</script>

<template>
    <div class="rounded-xl bg-card text-card-foreground shadow border border-slate-200">
        <div class="p-4">
            <div class="flex items-start justify-between mb-3">
                <div>
                    <h4 class="font-medium text-slate-900">{{ batch.batchTitle }}</h4>
                    <p class="text-sm text-slate-600">{{ batch.description }}</p>
                </div>
                <div class="flex space-x-1">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                        @click="$emit('edit', batch)"
                    >
                        <Icon icon="lucide:square-pen" class="w-3 h-3" />
                    </button>
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                        @click="$emit('delete', batch)"
                    >
                        <Icon icon="lucide:trash-2" class="w-3 h-3 text-red-500" />
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs mb-3">
                <div class="flex items-center space-x-1">
                    <Icon icon="iconoir:open-book" class="w-3 h-3 text-slate-400" />
                    <span>{{ batch.totalLessons }} lessons</span>
                </div>
                <div class="flex items-center space-x-1">
                    <Icon icon="mdi:clock-outline" class="w-3 h-3 text-slate-400" />
                    <span>{{ batch.duration || '4 hours' }}</span>
                </div>
                <div class="flex items-center space-x-1">
                    <Icon icon="lucide:target" class="w-3 h-3 text-slate-400" />
                    <span class="lowercase first-letter:uppercase">{{ batch.difficultyLevel }}</span>
                </div>
                <div class="flex items-center space-x-1">
                    <Icon icon="fa7-solid:rupiah-sign" class="w-3 h-3 text-slate-400" />
                    <span>{{ parseFloat(batch.salePrice).toLocaleString('id-ID') }}</span>
                </div>
            </div>
            <div class="flex flex-wrap gap-1" v-if="batch.topics && batch.topics.length > 0">
                <div
                    v-for="(topic, index) in batch.topics.slice(0, 3)"
                    :key="index"
                    class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                >
                    {{ topic }}
                </div>
                <div
                    v-if="batch.topics.length > 3"
                    class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                >
                    +{{ batch.topics.length - 3 }} more
                </div>
            </div>
        </div>
    </div>
</template>
