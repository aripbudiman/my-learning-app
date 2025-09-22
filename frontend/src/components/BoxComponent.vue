<script setup>
const props = defineProps({
    color: {
        type: String,
        default: 'blue'
    }
})
</script>
<template>
    <div :class="[
        'rounded-xl shadow text-white border-0',
        `bg-gradient-to-r from-${props.color}-500 to-${props.color}-600`
    ]">
        <div class="p-6">
            <div class="flex items-center justify-between">
                <div>
                    <p :class="[`text-${props.color}-100 text-sm`]">
                        <slot name="title"></slot>
                    </p>
                    <p class="text-2xl font-bold">
                        <slot name="value"></slot>
                    </p>
                </div>
                <slot name="icon"></slot>
            </div>
        </div>
    </div>
</template>