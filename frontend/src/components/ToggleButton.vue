<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue']);
const datastate = ref({
    signIn: 'active',
    signUp: 'inactive'
});

const setDataState = () => {
    if (datastate.value.signIn === 'active') {
        datastate.value.signIn = 'inactive';
        datastate.value.signUp = 'active';
        emit('update:modelValue', 'signup');
    } else {
        datastate.value.signIn = 'active';
        datastate.value.signUp = 'inactive';
        emit('update:modelValue', 'signin');
    }
}
</script>
<template>
    <div role="tablist" aria-orientation="horizontal"
        class="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground grid w-full grid-cols-2 mb-6"
        tabindex="0" data-orientation="horizontal" style="outline: none;">
        <button type="button" role="tab" aria-selected="true" aria-controls="radix-:ri:-content-signin"
            :data-state="datastate.signIn" @click="setDataState" id="radix-:ri:-trigger-signin"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-sm"
            tabindex="0" data-orientation="horizontal" data-radix-collection-item="">Sign
            In
        </button>
        <button type="button" role="tab" aria-selected="false" aria-controls="radix-:ri:-content-signup"
            :data-state="datastate.signUp" @click="setDataState" id="radix-:ri:-trigger-signup"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-sm"
            tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Sign
            Up
        </button>
    </div>
</template>