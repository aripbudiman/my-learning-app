<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

interface CourseFormData {
    id?: number
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
}

const emit = defineEmits<{
    submit: [data: CourseFormData]
    update: [data: CourseFormData]
    cancel: []
    close: []
}>()

const formData = ref<CourseFormData>({
    id: undefined,
    nameCourse: '',
    description: '',
    icon: '',
    colorTheme: '',
})

const isEditMode = computed(() => {
    return formData.value.id !== undefined
})

const previewIcon = computed(() => {
    return formData.value.icon || 'cib:mysql'
})

const isIconifyIcon = computed(() => {
    return (
        formData.value.icon &&
        !formData.value.icon.match(
            /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u
        )
    )
})

const previewTitle = computed(() => {
    return formData.value.nameCourse || 'Course Title'
})

const previewColor = computed(() => {
    return formData.value.colorTheme || 'from-green-400 to-blue-500'
})

const handleSubmit = (e: Event) => {
    e.preventDefault()
    if (isEditMode.value) {
        emit('update', formData.value)
    } else {
        emit('submit', formData.value)
    }
}

const handleCancel = () => {
    emit('cancel')
}

const handleClose = () => {
    emit('close')
}

const resetForm = () => {
    formData.value = {
        id: undefined,
        nameCourse: '',
        description: '',
        colorTheme: '',
        icon: '',
    }
}

const setFormData = (data: CourseFormData) => {
    formData.value = data
}

defineExpose({
    resetForm,
    setFormData,
})
</script>

<template>
    <div class="rounded-xl text-card-foreground shadow border-2 border-blue-200 bg-blue-50 mt-5" id="form-course">
        <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <div class="font-semibold leading-none tracking-tight">Create New Course</div>
                    <div class="text-sm text-muted-foreground">Fill in the details to create a new course</div>
                </div>
                <button
                    @click="handleClose"
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                    <Icon icon="lucide:x" width="24" height="24" class="w-4 h-4" />
                </button>
            </div>
        </div>
        <div class="p-6 pt-0">
            <form @submit="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="nameCourse"
                            >
                                Course Name *
                            </label>
                            <input
                                v-model="formData.nameCourse"
                                class="flex h-9 w-full rounded-md border border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="nameCourse"
                                placeholder="HTML & CSS"
                                required
                            />
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="description"
                            >
                                Description *
                            </label>
                            <textarea
                                v-model="formData.description"
                                class="flex min-h-[60px] w-full rounded-md border border-input px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="description"
                                placeholder="Course description..."
                                rows="3"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="icon"
                            >
                                Icon (Iconify name or Emoji) *
                            </label>
                            <input
                                v-model="formData.icon"
                                class="flex h-9 w-full rounded-md border border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="icon"
                                placeholder="cib:mysql atau 🌐"
                                maxlength="100"
                                required
                            />
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="colorTheme"
                            >
                                Color Theme *
                            </label>
                            <select
                                v-model="formData.colorTheme"
                                class="border w-full p-2 rounded bg-white text-sm"
                                required
                            >
                                <option value="">--Select Color Theme--</option>
                                <option value="from-orange-400 to-red-500">Orange to Red</option>
                                <option value="from-yellow-400 to-orange-500">Yellow to Orange</option>
                                <option value="from-green-400 to-blue-500">Green to Blue</option>
                                <option value="from-purple-400 to-pink-500">Purple to Pink</option>
                                <option value="from-blue-400 to-purple-500">Blue to Purple</option>
                                <option value="from-teal-400 to-green-500">Teal to Green</option>
                                <option value="from-indigo-500 to-blue-400">PHP (Indigo to Blue)</option>
                                <option value="from-yellow-400 to-blue-500">Python (Yellow to Blue)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-white rounded-lg border">
                    <h4 class="font-medium text-slate-900 mb-2">Preview:</h4>
                    <div class="flex items-center space-x-3">
                        <div
                            :class="`w-12 h-12 rounded-lg bg-gradient-to-r ${previewColor} flex items-center justify-center`"
                        >
                            <Icon v-if="isIconifyIcon" :icon="previewIcon" width="42" height="42" class="text-white" />
                            <div v-else class="text-2xl">{{ formData.icon || '🌐' }}</div>
                        </div>
                        <div>
                            <h3 class="font-semibold text-slate-900">{{ previewTitle }}</h3>
                            <p class="text-sm text-slate-600">{{ formData.description || 'Course description...' }}</p>
                            <div class="flex items-center space-x-3 mt-1">
                                <span class="text-xs text-slate-500"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-3">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex-1"
                        type="submit"
                    >
                        <Icon
                            :icon="isEditMode ? 'lucide:save' : 'lucide:plus'"
                            width="24"
                            height="24"
                            class="w-4 h-4"
                        />
                        {{ isEditMode ? 'Update Course' : 'Create Course' }}
                    </button>
                    <button
                        @click="handleCancel"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
