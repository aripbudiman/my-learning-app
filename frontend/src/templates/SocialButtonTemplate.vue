<script setup>
import ButtonGithub from '../components/ButtonGithub.vue';
import ButtonGoogle from '../components/ButtonGoogle.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Default Title'
    },
    description: {
        type: String,
        default: 'Default Description'
    }
})
</script>
<template>
    <div class="text-center">
        <div class="font-semibold tracking-tight text-2xl">{{ props.title }}</div>
        <div class="text-muted-foreground text-base">{{ props.description }}</div>
    </div>
    <div class="space-y-3">
        <ButtonGoogle></ButtonGoogle>
        <ButtonGithub></ButtonGithub>
    </div>
</template>