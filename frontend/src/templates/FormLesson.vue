<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'
import { getMasterCourses } from '../api/master-data';

const emit = defineEmits<{
    submit: []
    update: []
    cancel: []
    close: []
}>()

const masterCourses = ref<{
    id: string
    nameCourse: string
}[]>([])

const handleCancel = () => {
    emit('cancel')
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
                        <select tabindex="-1"
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
                        <select tabindex="-1"
                            class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                            <option value="html_css">🌐HTML &amp; CSS</option>
                            <option value="javascript">⚡JavaScript</option>
                            <option value="python">🐍Python</option>
                            <option value="sql">🗄️SQL</option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="title">Lesson Title *</label>
                            <input
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="title" placeholder="e.g., Introduction to HTML">
                        </div>
                        <div>
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="description">Description *</label>
                            <textarea
                                class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="description" placeholder="Lesson description..." rows="3"></textarea>
                        </div>
                        <div>

                        </div>
                        <div><label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="points">Points Reward</label><input
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="points" placeholder="50" min="10" max="500" type="number" value="50"></div>
                    </div>
                    <div class="space-y-4">
                        <div><label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="instructions">Instructions *</label><textarea
                                class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="instructions" placeholder="What should the student do in this lesson?" rows="4"
                                required=""></textarea></div>
                        <div><label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="expectedOutput">Expected Output</label><textarea
                                class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                id="expectedOutput" placeholder="What should the student see when they run the code?"
                                rows="3"></textarea></div>
                    </div>
                </div>
                <div><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="code">Starter Code</label>
                    <div class="mt-2"><textarea id="code"
                            class="w-full h-64 p-4 border border-slate-200 rounded-lg font-mono text-sm bg-slate-900 text-green-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter the starter code for this lesson..." spellcheck="false"></textarea></div>
                    <div class="flex items-center justify-between mt-2">
                        <p class="text-sm text-slate-500">This code will be pre-loaded in the student's editor</p>
                        <button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                            type="button">Load Template</button>
                    </div>
                </div>
                <div class="flex space-x-3"><button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex-1"
                        type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-save w-4 h-4 mr-2" aria-hidden="true">
                            <path
                                d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z">
                            </path>
                            <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                            <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                        </svg>Create Lesson</button><button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        type="button">Cancel</button></div>
            </form>
        </div>
    </div>
</template>
<style></style>