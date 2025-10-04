<script setup>
import { ref } from 'vue';
import MailIcon from '../assets/icons/MailIcon.vue';
import LockIcon from '../assets/icons/LockIcon.vue';
import EyeIcon from '../assets/icons/EyeIcon.vue';
import UserIcon from '../assets/icons/UserIcon.vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Default Label'
    },
    placeholder: {
        type: String,
        default: 'Enter text here...'
    },
    required: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'text'
    },
    value: {
        type: [String, Number],
        default: ''
    }
});
const inputType = ref(props.type);
const togglePassword = () => {
    inputType.value = inputType.value === 'password' ? 'text' : 'password';
};
</script>
<template>
    <div class="space-y-1">
        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="signin-email" v-text="label">
        </label>
        <div class="relative">
            <MailIcon v-if="label === 'Email'" />
            <LockIcon v-if="label === 'Password' || label === 'Confirm Password'" />
            <UserIcon v-if="label === 'Full Name'" />
            <input class="input-icon" :id="'signin-' + label" :placeholder="placeholder" required="" :type="inputType"
                value="">
            <button v-if="label === 'Password' || label === 'Confirm Password'" @click="togglePassword" class="btn-eye"
                type="button">
                <EyeIcon />
            </button>
        </div>
    </div>
</template>