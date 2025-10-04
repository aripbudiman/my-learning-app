<script setup>
import { ref } from 'vue';

import ToggleButton from '../components/ToggleButton.vue';
import BrandComponent from '../components/BrandComponent.vue';
import SigninTemplate from '../templates/SigninTemplate.vue';
import SignupTemplate from '../templates/SignupTemplate.vue';
const currentTab = ref('signin');

</script>
<template>
   <div class="container">
      <div class="w-full max-w-md">
         <BrandComponent>
            <template #title>Coding Journey</template>
            <template #description>Welcome back to your coding journey</template>
         </BrandComponent>
         <div class="wrapper-comp">
            <div>
               <div class="w-full">
                  <ToggleButton v-model="currentTab" />
                  <div v-if="currentTab === 'signin'" class="wrapper-sign" style="">
                     <SigninTemplate />
                  </div>
                  <div v-else class="wrapper-sign">
                     <SignupTemplate />
                  </div>
               </div>
            </div>
         </div>
         <p class="text-center text-sm text-slate-500 mt-6 hidden">By continuing, you agree to our Terms of Service
            and Privacy Policy</p>
      </div>
   </div>
</template>
<style>
.wrapper-comp {
   @apply rounded-xl text-card-foreground shadow-xl border-0 bg-white/80 backdrop-blur-sm;
}

.wrapper-comp>div:first-child {
   @apply flex flex-col p-6 space-y-1 pb-6
}
</style>