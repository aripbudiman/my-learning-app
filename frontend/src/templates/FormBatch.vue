<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import axios from 'axios'
import { SelectCourse } from '@models/course.model'

interface BatchFormData {
    id?: number
    courseId: string
    batchTitle: string
    orderIndex: number
    description: string
    difficultyLevel: string
    originalPrice: number
    salePrice: number
    topics: string
}

const masterCourses = ref<SelectCourse[]>([])

const getMasterCourses = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/master-data`)
    masterCourses.value = response.data.data
}

onMounted(() => {
    getMasterCourses()
})
const emit = defineEmits<{
    submit: [data: BatchFormData]
    update: [data: BatchFormData]
    cancel: []
    close: []
}>()

const props = defineProps<{
    courses?: Array<{ id: string; nameCourse: string; icon: string }>
}>()

const formData = ref<BatchFormData>({
    id: undefined,
    courseId: '',
    batchTitle: '',
    orderIndex: 0,
    description: '',
    topics: '',
    difficultyLevel: 'BEGINNER',
    originalPrice: 0,
    salePrice: 0,
})

const isEditMode = computed(() => {
    return formData.value.id !== undefined
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
        courseId: '',
        batchTitle: '',
        orderIndex: 0,
        description: '',
        topics: '',
        difficultyLevel: 'BEGINNER',
        originalPrice: 0,
        salePrice: 0,
    }
}

const setFormData = (data: BatchFormData) => {
    formData.value = data
}

defineExpose({
    resetForm,
    setFormData,
})
</script>

<template>
    <div class="rounded-xl text-card-foreground shadow border-2 border-purple-200 bg-purple-50 mt-5">
        <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <div class="font-semibold leading-none tracking-tight">
                        {{ isEditMode ? 'Edit Batch' : 'Create New Batch' }}
                    </div>
                    <div class="text-sm text-muted-foreground">Fill in the details to create a new batch</div>
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
                                for="courseId"
                                >Course *</label
                            >
                            <select
                                v-model="formData.courseId"
                                class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            >
                                <option value="">Select course</option>
                                <option v-for="course in masterCourses" :key="course.id" :value="course.id">
                                    {{ course.nameCourse }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="batchTitle"
                                >Batch Title *</label
                            >
                            <input
                                v-model="formData.batchTitle"
                                class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="batchTitle"
                                placeholder="e.g., Batch I - HTML Fundamentals"
                                required
                            />
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="description"
                                >Description *</label
                            >
                            <textarea
                                v-model="formData.description"
                                class="flex min-h-[60px] w-full rounded-md border border-input bg-white px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="description"
                                placeholder="Batch description..."
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="topics"
                                >Topics (comma separated) *</label
                            >
                            <textarea
                                v-model="formData.topics"
                                class="flex min-h-[60px] w-full rounded-md border border-input bg-white px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="topics"
                                placeholder="HTML Structure, Semantic Elements, Forms, Tables"
                                rows="2"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="difficultyLevel"
                                >Difficulty Level *</label
                            >
                            <select
                                v-model="formData.difficultyLevel"
                                id="difficultyLevel"
                                class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="BEGINNER">Beginner</option>
                                <option value="INTERMEDIATE">Intermediate</option>
                                <option value="ADVANCED">Advanced</option>
                            </select>
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="originalPrice"
                                >Original Price (IDR)</label
                            >
                            <input
                                v-model.number="formData.originalPrice"
                                class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="originalPrice"
                                placeholder="399000"
                                min="0"
                                type="number"
                            />
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="salePrice"
                                >Sale Price (IDR)</label
                            >
                            <input
                                v-model.number="formData.salePrice"
                                class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="salePrice"
                                placeholder="299000"
                                min="0"
                                type="number"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex space-x-3">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex-1"
                        type="submit"
                    >
                        <Icon
                            :icon="isEditMode ? 'lucide:save' : 'lucide:save'"
                            width="24"
                            height="24"
                            class="w-4 h-4 mr-2"
                        />
                        {{ isEditMode ? 'Update Batch' : 'Create Batch' }}
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
