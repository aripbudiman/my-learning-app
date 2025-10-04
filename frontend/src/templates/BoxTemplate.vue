<script setup>
import BoxComponent from '../components/BoxComponent.vue';
import { Icon } from "@iconify/vue";
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <BoxComponent color="blue">
            <template #title>Total Points</template>
            <template #value>1,250</template>
            <template #icon>
                <Icon icon="lucide:trophy" width="33" height="33" class="text-blue-200" />
            </template>
        </BoxComponent>
        <BoxComponent color="green">
            <template #title>Lessons Completed</template>
            <template #value>45/260</template>
            <template #icon>
                <Icon icon="lucide:target" width="35" height="35" class="text-green-200" />
            </template>
        </BoxComponent>
        <BoxComponent color="orange">
            <template #title>Current Streak</template>
            <template #value>5 days</template>
            <template #icon>
                <Icon icon="octicon:flame-16" width="32" height="32" class="text-orange-200" />
            </template>
        </BoxComponent>
        <BoxComponent color="purple">
            <template #title>Current Streak</template>
            <template #value>3</template>
            <template #icon>
                <Icon icon="mingcute:star-line" width="35" height="35" class="text-purple-200" />
            </template>
        </BoxComponent>
    </div>
</template>