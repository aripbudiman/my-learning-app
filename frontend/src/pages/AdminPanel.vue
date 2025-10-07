<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import Navbar from '../components/Navbar.vue'
import BoxAdmin from '../templates/BoxAdmin.vue'
import CourseCard from '../components/CourseCard.vue'
import FormCourse from '../templates/FormCourse.vue'
import FormBatch from '../templates/FormBatch.vue'
import QuickActions from '../components/QuickActions.vue'
import ActivityItem from '../components/ActivityItem.vue'
import CourseWithBatches from '../components/CourseWithBatches.vue'
import axios from 'axios'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const tab = ref('overview')
const courses = ref([])
const page = ref({
    course: 1,
    batch: 1,
    lesson: 1,
})
const limit = ref({
    course: 10,
    batch: 10,
    lesson: 10,
})
const showFormCourse = ref(false)
const formCourseRef = ref(null)
const showFormBatch = ref(false)
const formBatchRef = ref(null)
const url = import.meta.env.VITE_API_URL

const getCourses = async () => {
    try {
        const response = await axios.get(`${url}/api/courses?limit=${limit.value.course}&page=${page.value.course}`)
        courses.value = response.data.data
    } catch (error) {
        console.error('Error fetching courses:', error)
        alert('Error fetching courses')
    }
}

const loadMore = () => {
    limit.value.course += 10
    getCourses()
}

const handleEditCourse = (course) => {
    showFormCourse.value = true
    nextTick(() => {
        if (formCourseRef.value) {
            formCourseRef.value.setFormData({
                id: course.id,
                nameCourse: course.nameCourse,
                description: course.description,
                colorTheme: course.colorTheme,
                icon: course.icon,
            })
        }
    })
}

const handleDeleteCourse = async (course) => {
    await axios
        .delete(`${url}/api/courses/${course.id}`)
        .then((response) => {
            createToast('Course deleted successfully', {
                type: 'success',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
            getCourses()
        })
        .catch((error) => {
            console.error('Error deleting course:', error)
            createToast('Error deleting course', {
                type: 'danger',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
        })
}

const handleShowFormCourse = () => {
    showFormCourse.value = true
}

const handleFormCourseSubmit = async (formData) => {
    await axios
        .post(`${url}/api/courses`, formData)
        .then((response) => {
            createToast('Course created successfully', {
                type: 'success',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
            getCourses()
            showFormCourse.value = false
            formCourseRef.value?.resetForm()
        })
        .catch((error) => {
            console.error('Error creating course:', error)
            createToast('Error creating course', {
                type: 'danger',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
        })
}

const handleFormCourseUpdate = async (formData) => {
    const { id, ...payload } = formData
    await axios
        .put(`${url}/api/courses/${id}`, payload)
        .then((response) => {
            createToast('Course updated successfully', {
                type: 'success',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
            getCourses()
            showFormCourse.value = false
            formCourseRef.value?.resetForm()
        })
        .catch((error) => {
            console.error('Error updating course:', error)
            createToast('Error updating course', {
                type: 'danger',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
        })
}

const handleFormCourseCancel = () => {
    showFormCourse.value = false
    formCourseRef.value?.resetForm()
}

const handleFormCourseClose = () => {
    showFormCourse.value = false
    formCourseRef.value?.resetForm()
}

const handleShowFormBatch = () => {
    showFormBatch.value = true
}

const handleFormBatchSubmit = async (formData) => {
    await axios
        .post(`${url}/api/modules`, formData)
        .then((response) => {
            createToast('Batch created successfully', {
                type: 'success',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
            getBatches()
            showFormBatch.value = false
            formBatchRef.value?.resetForm()
        })
        .catch((error) => {
            console.error('Error creating batch:', error)
            createToast('Error creating batch', {
                type: 'danger',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
        })
}

const handleFormBatchUpdate = async (formData) => {
    const { id, ...payload } = formData
    await axios
        .put(`${url}/api/modules/${id}`, payload)
        .then((response) => {
            createToast('Batch updated successfully', {
                type: 'success',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
            getBatches()
            showFormBatch.value = false
            formBatchRef.value?.resetForm()
        })
        .catch((error) => {
            console.error('Error updating batch:', error)
            createToast('Error updating batch', {
                type: 'danger',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
        })
}

const handleFormBatchCancel = () => {
    showFormBatch.value = false
    formBatchRef.value?.resetForm()
}

const handleFormBatchClose = () => {
    showFormBatch.value = false
    formBatchRef.value?.resetForm()
}

const handleEditBatch = (batch) => {
    showFormBatch.value = true
    nextTick(() => {
        if (formBatchRef.value) {
            formBatchRef.value.setFormData({
                id: batch.id,
                courseId: batch.courseId,
                batchTitle: batch.batchTitle,
                orderIndex: 0,
                description: batch.description,
                topics: batch.topics,
                difficultyLevel: batch.difficultyLevel,
                originalPrice: batch.originalPrice,
                salePrice: batch.salePrice,
            })
        }
    })
}

const handleDeleteBatch = async (batch) => {
    await axios
        .delete(`${url}/api/modules/${batch.id}`)
        .then((response) => {
            createToast('Batch deleted successfully', {
                type: 'success',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
            getBatches()
        })
        .catch((error) => {
            console.error('Error deleting batch:', error)
            createToast('Error deleting batch', {
                type: 'danger',
                hideProgressBar: 'false',
                showIcon: 'true',
            })
        })
}

const handleQuickAction = (action) => {
    if (action === 'add-course') {
        handleShowFormCourse()
    }
    // Add other actions as needed
}

const recentActivities = ref([
    { id: 1, title: 'HTML & CSS course updated', time: '2 hours ago', type: 'course' },
    { id: 2, title: 'New lesson added to JavaScript Batch I', time: '5 hours ago', type: 'lesson' },
    { id: 3, title: 'Python Batch III published', time: '1 day ago', type: 'batch' },
])

// Mock data for batches - replace with actual API call
const batches = ref([])

const getBatches = async () => {
    const response = await axios.get(
        `${url}/api/courses/with-batch?limit=${limit.value.batch}&page=${page.value.batch}`
    )
    batches.value = response.data.data
}

onMounted(() => {
    getCourses()
    getBatches()
})
</script>
<template>
    <Navbar>
        <template #title>Admin Panel</template>
    </Navbar>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
            role="tablist"
            aria-orientation="horizontal"
            class="h-9 items-center justify-center rounded-lg p-1 text-muted-foreground grid w-full grid-cols-4 bg-white shadow-sm mb-10"
            tabindex="0"
            data-orientation="horizontal"
            style="outline: none"
        >
            <button
                type="button"
                role="tab"
                aria-selected="true"
                :data-state="tab === 'overview' ? 'active' : 'inactive'"
                class="tab-button"
                @click="tab = 'overview'"
            >
                <Icon icon="lucide:chart-column" width="17" height="17" class="text-gray-500" />
                <span>Overview</span>
            </button>
            <button
                type="button"
                role="tab"
                aria-selected="false"
                :data-state="tab === 'courses' ? 'active' : 'inactive'"
                class="tab-button"
                @click="tab = 'courses'"
            >
                <Icon icon="lucide:book-open" width="17" height="17" class="text-gray-500" />
                <span>Courses</span>
            </button>
            <button
                type="button"
                role="tab"
                aria-selected="false"
                :data-state="tab === 'batches' ? 'active' : 'inactive'"
                class="tab-button"
                @click="tab = 'batches'"
            >
                <Icon icon="fluent:layer-24-regular" width="23" height="23" class="text-gray-500" />
                <span>Batches</span>
            </button>
            <button
                type="button"
                role="tab"
                aria-selected="false"
                :data-state="tab === 'lessons' ? 'active' : 'inactive'"
                class="tab-button"
                @click="tab = 'lessons'"
            >
                <Icon icon="heroicons-outline:play" width="23" height="23" class="text-gray-500" />
                <span>Lessons</span>
            </button>
        </div>
        <div id="tab-overview" v-if="tab === 'overview'">
            <BoxAdmin />
            <QuickActions @action-click="handleQuickAction" />
            <div class="rounded-xl border bg-card text-card-foreground shadow mt-10" id="recent-activity">
                <div class="flex flex-col space-y-1.5 p-6">
                    <div class="font-semibold leading-none tracking-tight">Recent Activity</div>
                    <div class="text-sm text-muted-foreground">Latest changes to your content</div>
                </div>
                <div class="p-6 pt-0">
                    <div class="space-y-4">
                        <ActivityItem v-for="activity in recentActivities" :key="activity.id" :activity="activity" />
                    </div>
                </div>
            </div>
        </div>
        <div id="tab-courses" v-if="tab === 'courses'">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">Course Management</h2>
                    <p class="text-slate-600">Create and manage your courses</p>
                </div>
                <button
                    @click="handleShowFormCourse"
                    class="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex items-center space-x-2"
                >
                    <Icon icon="lucide:plus" width="24" height="24" />
                    <span>Add New Course</span>
                </button>
            </div>
            <FormCourse
                v-if="showFormCourse"
                ref="formCourseRef"
                @submit="handleFormCourseSubmit"
                @update="handleFormCourseUpdate"
                @cancel="handleFormCourseCancel"
                @close="handleFormCourseClose"
            />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <CourseCard
                    v-for="course in courses"
                    :key="course.id"
                    :course="course"
                    @edit="handleEditCourse"
                    @delete="handleDeleteCourse"
                />
                <div class="flex items-center justify-center col-span-2">
                    <button id="load-more-button" @click="loadMore">Load More</button>
                </div>
            </div>
        </div>
        <div id="tab-batches" v-if="tab === 'batches'">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">Batch Management</h2>
                    <p class="text-slate-600">Create and manage course batches/modules</p>
                </div>
                <button
                    @click="handleShowFormBatch"
                    class="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex items-center space-x-2"
                >
                    <Icon icon="lucide:plus" width="24" height="24" class="w-4 h-4" />
                    <span>Add New Batch</span>
                </button>
            </div>
            <FormBatch
                v-if="showFormBatch"
                ref="formBatchRef"
                :courses="courses"
                @submit="handleFormBatchSubmit"
                @update="handleFormBatchUpdate"
                @cancel="handleFormBatchCancel"
                @close="handleFormBatchClose"
            />
            <div class="space-y-8 mt-8">
                <CourseWithBatches
                    v-for="batch in batches"
                    :key="batch.id"
                    :course="batch"
                    @edit-batch="handleEditBatch"
                    @delete-batch="handleDeleteBatch"
                />
            </div>
        </div>
        <div id="tab-lessons" v-if="tab === 'lessons'"></div>
    </div>
</template>

<style scoped>
.tab-button {
    @apply justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow flex items-center space-x-2;
}

#load-more-button {
    @apply border py-1.5 rounded-md px-4 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out text-sm;
}
</style>
