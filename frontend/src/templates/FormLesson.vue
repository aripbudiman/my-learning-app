<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'
import { getMasterCourses, getMasterModules } from '../api/master-data';
import { store } from '../api/lessons';
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const emit = defineEmits<{
    submit: []
    update: []
    cancel: []
    close: []
}>()

const isEditMode = ref(false)

const LessonType = ref([
    { value: 'PYTHON', label: 'PYTHON' },
    { value: 'TYPESCRIPT', label: 'TYPESCRIPT' },
    { value: 'PHP', label: 'PHP' },
    { value: 'SQLITE3', label: 'SQLITE3' },
    { value: 'JAVASCRIPT', label: 'JAVASCRIPT' },
    { value: 'JAVA', label: 'JAVA' },
])

const payload = ref({
    moduleId: '',
    lessonTitle: '',
    description: '',
    lessonType: '',
    pointsReward: '',
    starterCode: '',
    instructions: '',
    expectedOutput: '',
    orderIndex: '',
})

const masterCourses = ref<{
    id: string
    nameCourse: string
}[]>([])

const masterModules = ref<{
    id: string
    batchTitle: string
}[]>([])

const handleCancel = () => {
    emit('cancel')
}

const handleSubmit = () => {
    store(payload.value)
        .then((response) => {
            payload.value = {
                moduleId: '',
                lessonTitle: '',
                description: '',
                lessonType: '',
                pointsReward: '',
                starterCode: '',
                instructions: '',
                expectedOutput: '',
                orderIndex: '',
            }
            createToast('Lesson created successfully', {
                type: 'success',
                hideProgressBar: false,
                showIcon: true,
            })
            emit('cancel')
        })
        .catch((error) => {
            console.error(error)
        })
}

const changeCourse = async (params: number) => {
    await getMasterModules(params)
        .then((response) => {
            masterModules.value = response
        })
        .catch((error) => {
            console.error(error)
        })
}
onMounted(async () => {
    await getMasterCourses()
        .then((response) => {
            masterCourses.value = response
        })
        .catch((error) => {
            console.error(error)
        })
})
</script>
<template>
    <div class="rounded-xl text-card-foreground shadow border-2 border-green-200 bg-green-50 mt-5">
        <div class="flex flex-col space-y-1.5 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <div class="font-semibold leading-none tracking-tight">Create New Lesson</div>
                    <div class="text-sm text-muted-foreground">Fill in the details to create a new lesson</div>
                </div>
                <button @click="handleCancel"
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                    <Icon icon="lucide:x" width="24" height="24" class="w-4 h-4" />
                </button>
            </div>
        </div>
        <div class="p-6 pt-0">
            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="courseSelect">Course *</label>
                        <select tabindex="-1" @change="changeCourse($event?.target?.value)"
                            class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                            <option value="">Select course</option>
                            <option v-for="course in masterCourses" :key="course.id" :value="course.id">
                                {{ course.nameCourse }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="courseSelect">Batch *</label>
                        <select tabindex="-1" :disabled="masterModules.length == 0" v-model="payload.moduleId"
                            class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                            <option value="">Select Batch</option>
                            <option v-for="batch in masterModules" :key="batch.id" :value="batch.id">
                                {{ batch.batchTitle }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="courseSelect">Lesson Type *</label>
                        <select tabindex="-1" v-model="payload.lessonType"
                            class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                            <option value="">Select Lesson Type</option>
                            <option v-for="item in LessonType" :key="item.value" :value="item.value">
                                {{ item.label }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="title">Order Index *</label>
                        <input v-model="payload.orderIndex"
                            class="flex h-9 w-full bg-white rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            id="title" placeholder="Lesson title..." type="text">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="title">Lesson Title *</label>
                            <input v-model="payload.lessonTitle"
                                class="flex h-9 w-full bg-white rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="title" placeholder="Lesson title..." type="text">
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="description">Description *</label>
                            <textarea v-model="payload.description"
                                class="flex min-h-[60px] w-full bg-white rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="description" placeholder="Lesson description..." rows="3"></textarea>
                        </div>
                        <div>

                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="points">Points Reward</label>
                            <input v-model.number="payload.pointsReward"
                                class="flex h-9 w-full bg-white rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="points" placeholder="50" min="10" max="500" type="number" value="50">
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="instructions">Instructions *</label>
                            <textarea v-model="payload.instructions"
                                class="flex min-h-[60px] w-full bg-white rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="instructions" placeholder="What should the student do in this lesson?"
                                rows="4"></textarea>
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="expectedOutput">Expected Output</label>
                            <textarea v-model="payload.expectedOutput"
                                class="flex min-h-[60px] w-full bg-white rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="expectedOutput" placeholder="What should the student see when they run the code?"
                                rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="code">Starter Code</label>
                    <div class="mt-2">
                        <textarea id="code" v-model="payload.starterCode"
                            class="w-full h-64 p-4 border border-slate-200 rounded-lg font-mono text-sm bg-slate-900 text-green-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter the starter code for this lesson..." spellcheck="false"></textarea>
                    </div>
                    <div class="flex items-center justify-between mt-2">
                        <p class="text-sm text-slate-500">This code will be pre-loaded in the student's editor</p>
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                            type="button">Load Template</button>
                    </div>
                </div>
                <div class="flex space-x-3">
                    <button @click="handleSubmit"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex-1"
                        type="button">
                        <Icon :icon="isEditMode ? 'lucide:save' : 'lucide:save'" width="24" height="24"
                            class="w-4 h-4 mr-2" />
                        Create Lesson
                    </button>
                    <button @click="handleCancel"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        type="button">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style></style>