<script setup>
import { Icon } from '@iconify/vue'

defineProps({
    actions: {
        type: Array,
        default: () => [
            { label: 'Add New Course', icon: 'mdi:plus', action: 'add-course' },
            { label: 'Create Batch', icon: 'mdi:plus', action: 'create-batch' },
            { label: 'Add Lesson', icon: 'mdi:plus', action: 'add-lesson' },
        ],
    },
})

defineEmits(['action-click'])
</script>

<template>
    <div class="rounded-xl border bg-card text-card-foreground shadow">
        <div class="flex flex-col space-y-1.5 p-6">
            <div class="font-semibold leading-none tracking-tight">Quick Actions</div>
            <div class="text-sm text-muted-foreground">Common tasks to manage your content</div>
        </div>
        <div class="p-6 pt-0">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                    v-for="action in actions"
                    :key="action.action"
                    class="action-button"
                    @click="$emit('action-click', action.action)"
                >
                    <Icon :icon="action.icon" width="24" height="24" />
                    <span>{{ action.label }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.action-button {
    @apply inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-900 px-4 py-2 h-20 flex-col space-y-2;
}
</style>
