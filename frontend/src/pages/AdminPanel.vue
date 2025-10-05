<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import Navbar from '../components/Navbar.vue'
import BoxAdmin from '../templates/BoxAdmin.vue'
import CourseCard from '../components/CourseCard.vue'
import FormCourse from '../templates/FormCourse.vue'
import axios from 'axios'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const tab = ref('overview')
const courses = ref([])
const page = ref(1)
const limit = ref(10)
const showFormCourse = ref(false)
const formCourseRef = ref(null)
const url = import.meta.env.VITE_API_URL

const getCourses = async () => {
    try {
        const response = await axios.get(`${url}/api/courses?limit=${limit.value}&page=${page.value}`)
        courses.value = response.data.data
    } catch (error) {
        console.error('Error fetching courses:', error)
        alert('Error fetching courses')
    }
}

const loadMore = () => {
    limit.value += 10
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

onMounted(() => {
    getCourses()
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
            <div class="rounded-xl border bg-card text-card-foreground shadow">
                <div class="flex flex-col space-y-1.5 p-6">
                    <div class="font-semibold leading-none tracking-tight">Quick Actions</div>
                    <div class="text-sm text-muted-foreground">Common tasks to manage your content</div>
                </div>
                <div class="p-6 pt-0">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button class="action-button">
                            <Icon icon="mdi:plus" width="24" height="24" />
                            <span>Add New Course</span>
                        </button>
                        <button class="action-button">
                            <Icon icon="mdi:plus" width="24" height="24" />
                            <span>Create Batch</span>
                        </button>
                        <button class="action-button">
                            <Icon icon="mdi:plus" width="24" height="24" />
                            <span>Add Lesson</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="rounded-xl border bg-card text-card-foreground shadow mt-10" id="recent-activity">
                <div class="flex flex-col space-y-1.5 p-6">
                    <div class="font-semibold leading-none tracking-tight">Recent Activity</div>
                    <div class="text-sm text-muted-foreground">Latest changes to your content</div>
                </div>
                <div class="p-6 pt-0">
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
                            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <Icon
                                    icon="lucide:book-open"
                                    width="24"
                                    height="24"
                                    class="w-4 h-4 text-green-600"
                                    aria-hidden="true"
                                />
                            </div>
                            <div class="flex-1">
                                <p class="font-medium text-slate-900">HTML &amp; CSS course updated</p>
                                <p class="text-sm text-slate-600">2 hours ago</p>
                            </div>
                            <div class="badge">Course</div>
                        </div>
                        <div class="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Icon
                                    icon="lucide:circle-play"
                                    width="24"
                                    height="24"
                                    class="w-4 h-4 text-blue-600"
                                    aria-hidden="true"
                                />
                            </div>
                            <div class="flex-1">
                                <p class="font-medium text-slate-900">New lesson added to JavaScript Batch I</p>
                                <p class="text-sm text-slate-600">5 hours ago</p>
                            </div>
                            <div class="badge">Lesson</div>
                        </div>
                        <div class="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg">
                            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <Icon
                                    icon="lucide:layers"
                                    width="24"
                                    height="24"
                                    class="w-4 h-4 text-purple-600"
                                    aria-hidden="true"
                                />
                            </div>
                            <div class="flex-1">
                                <p class="font-medium text-slate-900">Python Batch III published</p>
                                <p class="text-sm text-slate-600">1 day ago</p>
                            </div>
                            <div class="badge">Batch</div>
                        </div>
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
        <div id="tab-batches" v-if="tab === 'batches'"></div>
        <div id="tab-lessons" v-if="tab === 'lessons'"></div>
    </div>
</template>

<style scoped>
.tab-button {
    @apply justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow flex items-center space-x-2;
}

.action-button {
    @apply inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-900 px-4 py-2 h-20 flex-col space-y-2;
}

.badge {
    @apply inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200;
}

#load-more-button {
    @apply border py-1.5 rounded-md px-4 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out text-sm;
}
</style>
