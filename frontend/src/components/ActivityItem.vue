<script setup>
import { Icon } from '@iconify/vue'

defineProps({
    activity: {
        type: Object,
        required: true,
    },
})

const iconConfig = {
    course: { icon: 'lucide:book-open', color: 'green' },
    lesson: { icon: 'lucide:circle-play', color: 'blue' },
    batch: { icon: 'lucide:layers', color: 'purple' },
}
</script>

<template>
    <div class="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
        <div
            :class="`w-8 h-8 bg-${iconConfig[activity.type]?.color || 'gray'}-100 rounded-full flex items-center justify-center`"
        >
            <Icon
                :icon="iconConfig[activity.type]?.icon || 'lucide:info'"
                width="24"
                height="24"
                :class="`w-4 h-4 text-${iconConfig[activity.type]?.color || 'gray'}-600`"
                aria-hidden="true"
            />
        </div>
        <div class="flex-1">
            <p class="font-medium text-slate-900">{{ activity.title }}</p>
            <p class="text-sm text-slate-600">{{ activity.time }}</p>
        </div>
        <div class="badge">{{ activity.type }}</div>
    </div>
</template>

<style scoped>
.badge {
    @apply inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200;
}
</style>
