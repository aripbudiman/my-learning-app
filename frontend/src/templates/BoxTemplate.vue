<script setup>
import BoxComponent from '../components/BoxComponent.vue';
import Trophy from '../assets/icons/Trophy.vue';
import LucidTarget from '../assets/icons/LucidTarget.vue';
import Flame from '../assets/icons/Flame.vue';
import Star from '../assets/icons/Star.vue';
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <BoxComponent color="blue">
            <template #title>Total Points</template>
            <template #value>1,250</template>
            <template #icon>
                <Trophy />
            </template>
        </BoxComponent>
        <BoxComponent color="green">
            <template #title>Lessons Completed</template>
            <template #value>45/260</template>
            <template #icon>
                <LucidTarget />
            </template>
        </BoxComponent>
        <BoxComponent color="orange">
            <template #title>Current Streak</template>
            <template #value>5 days</template>
            <template #icon>
                <Flame />
            </template>
        </BoxComponent>
        <BoxComponent color="purple">
            <template #title>Current Streak</template>
            <template #value>3</template>
            <template #icon>
                <Star />
            </template>
        </BoxComponent>
    </div>
</template>