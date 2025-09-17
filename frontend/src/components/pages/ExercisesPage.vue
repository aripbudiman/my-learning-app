<script setup>
import { ref, computed } from 'vue'
import IconForm from '../icons/IconForm.vue';
import { datatable } from '../dummy/data/datatable.ts';
import { dataquestions } from '../dummy/data/dataquestions.ts';
const activeTab = ref('datatable')
const showHint = ref(false);
const userQuery = ref('');
const showSolution = ref(false); const feedback = ref({ type: null, message: '' });
const selectedQuestion = ref(0);
const completedQuestions = ref(new Set());

const switchTab = (tabName) => {
    activeTab.value = tabName
}
const tables = ref(datatable)
const questions = ref(dataquestions)
const currentQuestion = computed(() => questions.value[selectedQuestion.value]);
const selectQuestion = (index) => {
    selectedQuestion.value = index;
    resetQuestion();
};
const handleSubmitAnswer = () => {
    const isCorrect = currentQuestion.value.validateAnswer(userQuery.value);
    console.log(isCorrect)
    if (isCorrect) {
        feedback.value = { type: 'success', message: 'Benar! Query Anda sudah tepat.' };
        completedQuestions.value.add(selectedQuestion.value);
    } else {
        feedback.value = { type: 'error', message: 'Belum tepat. Coba periksa kembali syntax dan logika query Anda.' };
    }
};
const resetQuestion = () => {
    userQuery.value = '';
    showHint.value = false;
    showSolution.value = false;
    feedback.value = { type: null, message: '' };
};
</script>
<template>
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 min-h-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center space-x-4">
                <IconForm width="64" height="64"></IconForm>
                <h1 class="text-4xl md:text-4xl font-semibold text-slate-700">Latihan Soal</h1>
            </div>
            <hr class="my-5 border border-indigo-200">
            <div class="tabs justify-center">
                <a class="tab tab-lifted" :class="{ 'tab-active': activeTab === 'datatable' }"
                    @click="switchTab('datatable')">
                    📊 Datatable
                </a>
                <a class="tab tab-lifted" :class="{ 'tab-active': activeTab === 'soal-ujian' }"
                    @click="switchTab('soal-ujian')">
                    ❓ Soal Ujian
                </a>
                <a class="tab tab-lifted" :class="{ 'tab-active': activeTab === 'referensi' }"
                    @click="switchTab('referensi')">
                    📒 Referensi Konsep SQL
                </a>
            </div>
            <div class="bg-white border py-5 px-4 rounded-lg">
                <section id="datatable" v-show="activeTab === 'datatable'">
                    <h2 class="text-xl font-semibold mb-4 text-slate-700">Data Latihan Soal</h2>
                    <div class="overflow-x-auto" v-for="table in tables">
                        <div class="bg-gradient-to-br from-blue-600/90 to-indigo-600/90 p-2 rounded-t-lg">
                            <h2 class="font-medium text-white capitalize">{{ table.name }}</h2>
                        </div>
                        <table class="table table-xs">
                            <thead>
                                <tr>
                                    <th v-for="col in table.columns" :key="col">{{ col }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in table.data" :key="row">
                                    <td v-for="cell in row" :key="cell" :class="cell === null ? 'null' : ''">{{
                                        cell ?? 'NULL' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section id="soal-ujian" v-show="activeTab === 'soal-ujian'">
                    <div class="flex items-center justify-between mt-2 mb-5">
                        <h2 class="text-2xl font-semibold mb-4 text-slate-800">Soal Ujian</h2>
                        <div
                            class="flex items-center gap-2 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white px-4 py-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="award" class="lucide lucide-award h-5 w-5">
                                <path
                                    d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                                </path>
                                <circle cx="12" cy="8" r="6"></circle>
                            </svg><span class="font-semibold">{{ completedQuestions.size }}/15 Selesai</span>
                        </div>
                    </div>
                    <div class="flex space-x-5 bg-[#e0e7ff] p-5 rounded-lg">
                        <div class="border rounded-lg bg-white pb-2">
                            <div class="bg-primary opacity-70 py-4 rounded-t-lg">
                                <h3 class="font-semibold text-white text-center">Pilih Soal</h3>
                            </div>
                            <hr>
                            <ul class="bg-base-100/30 w-64 space-y-3 px-5 py-2">
                                <li v-for="(i, idx) in questions" :key="idx">
                                    <button @click="selectQuestion(idx)" :class="[
                                        'btn-outline-indigo',
                                        {
                                            'selected': selectedQuestion === idx,
                                            'completed': completedQuestions.has(idx) && selectedQuestion !== idx
                                        }
                                    ]">
                                        Soal {{ idx + 1 }}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="border-indigo-200 bg-white rounded-lg w-full">
                            <div class="bg-primary opacity-70 py-4 rounded-t-lg">
                                <h3 class="font-semibold text-white text-center">Soal No {{ selectedQuestion + 1 }}</h3>
                            </div>
                            <div class="flex flex-col w-full p-5 space-y-2">
                                <div
                                    class="grid h-20 card bg-base-200 rounded-md place-items-start pl-3 py-2 text-2xl font-semibold">
                                    {{ currentQuestion.title }}
                                    <div class="badge badge-accent" v-if="currentQuestion.difficulty === 'Easy'">{{
                                        currentQuestion.difficulty }}</div>
                                    <div class="badge badge-violet" v-if="currentQuestion.difficulty === 'Medium'">{{
                                        currentQuestion.difficulty }}</div>
                                    <div class="badge badge-hard" v-if="currentQuestion.difficulty === 'Hard'">{{
                                        currentQuestion.difficulty }}</div>
                                </div>
                                <div class="alert alert-info-cs">
                                    <span>{{ currentQuestion.description }}</span>
                                </div>
                                <h3 class="font-semibold">Tulis Query SQL:</h3>
                                <textarea v-model="userQuery"
                                    class="textarea textarea-bordered h-32 text-l bg-[#1e293b] text-white"
                                    placeholder="SELECT * FROM ..."></textarea>


                                <!-- Feedback -->
                                <div v-if="feedback.type" :class="[
                                    'p-4 rounded-lg flex items-center gap-2',
                                    feedback.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                                ]">
                                    <i :data-lucide="feedback.type === 'success' ? 'check' : 'x'" class="h-5 w-5"></i>
                                    {{ feedback.message }}
                                </div>

                                <div class="alert alert-warning-cs" v-if="showHint">
                                    <span>Petunjuk:</span>
                                    <span>
                                        {{ currentQuestion.hint }}
                                    </span>
                                </div>
                                <div v-show="showSolution" class="bg-gray-100 border border-gray-300 p-4 rounded-lg"
                                    v-if="showSolution">
                                    <p class="font-semibold text-gray-800 mb-2">Solusi:</p>
                                    <code
                                        class="block bg-white p-3 rounded border border-gray-200 font-mono text-sm text-blue-600">
                                        {{ currentQuestion.expectedQuery }}
                                    </code>
                                </div>
                                <div class="flex flex-wrap gap-2 pt-2">
                                    <button @click="handleSubmitAnswer"
                                        class="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 flex items-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" data-lucide="check"
                                            class="lucide lucide-check h-4 w-4 mr-2">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg> Submit Jawaban
                                    </button>
                                    <button @click="showHint = !showHint"
                                        class="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 flex items-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" data-lucide="lightbulb"
                                            class="lucide lucide-lightbulb h-4 w-4 mr-2">
                                            <path
                                                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
                                            </path>
                                            <path d="M9 18h6"></path>
                                            <path d="M10 22h4"></path>
                                        </svg> {{ showHint ? 'Sembunyikan' : 'Tampilkan' }} Petunjuk
                                    </button>
                                    <button @click="showSolution = !showSolution"
                                        class="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 flex items-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" data-lucide="alert-circle"
                                            class="lucide lucide-alert-circle h-4 w-4 mr-2">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" x2="12" y1="8" y2="12"></line>
                                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                        </svg> {{ showSolution ? 'Sembunyikan' : 'Tampilkan' }} Solusi
                                    </button>
                                    <button @click="resetQuestion"
                                        class="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 flex items-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" data-lucide="x"
                                            class="lucide lucide-x h-4 w-4 mr-2">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                        </svg> Reset </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>
