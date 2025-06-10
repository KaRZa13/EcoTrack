<template>
    <div class="w-full h-full p-4 bg-gray-50">
        <div class="flex flex-col gap-2 xl:gap-6 justify-center max-w-2xl mx-auto">
            <router-link to="/"
                class="self-start mb-2 px-4 py-2 bg-[#024533] text-[#FFFD99] rounded-lg font-semibold hover:bg-[#1b5e20] transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clip-rule="evenodd" />
                </svg>
                Retour à l'accueil
            </router-link>

            <h2 class="text-[#024533] text-4xl font-black">Calculez votre empreinte carbone</h2>

            <div class="flex justify-center w-full my-6">
                <nav class="flex items-center justify-center w-full max-w-3xl">
                    <div class="flex items-center"
                        v-for="(category, index) in ['Transport', 'Logement', 'Alimentation', 'Numérique', 'Consommation', 'Loisirs']"
                        :key="index">
                        <div class="flex flex-col items-center">
                            <div :class="[
                                'rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold',
                                step >= index ? 'bg-[#024533] text-white' : 'bg-gray-200 text-gray-500'
                            ]">
                                {{ index + 1 }}
                            </div>
                            <span :class="[
                                'text-xs mt-1 font-medium',
                                step >= index ? 'text-[#024533]' : 'text-gray-400'
                            ]">
                                {{ category }}
                            </span>
                        </div>
                        <div v-if="index < 5" :class="[
                            'h-0.5 w-8 mx-1',
                            step > index ? 'bg-[#024533]' : 'bg-gray-200'
                        ]"></div>
                    </div>
                </nav>
            </div>

            <form @submit.prevent="handleSubmit" class="w-full bg-white p-6 rounded-lg shadow-md">
                <div class="mb-6">
                    <div v-for="question in questions" :key="question.id" class="mb-4">
                        <label :for="question.id" class="block text-[#5E2BFF] text-xl font-semibold mb-2">{{
                            question.content }}</label>

                        <select :id="question.id" v-model="form[question.id]"
                            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e7d32] focus:border-[#2e7d32] outline-none transition">
                            <option value="" disabled selected>Sélectionnez une réponse</option>
                            <option v-for="answer in question.answers" :key="answer.id" :value="answer.value">
                                {{ answer.content }}
                            </option>
                        </select>
                        <span v-if="errors[question.id]" class="text-red-500 text-sm">{{ errors[question.id] }}</span>
                    </div>
                </div>

                <div class="flex justify-between mt-8">
                    <button type="button"
                        class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                        @click="prevStep" v-if="step > 0">
                        Précédent
                    </button>

                    <button type="button"
                        class="px-6 py-3 bg-[#024533] text-white rounded-lg font-semibold hover:bg-[#1b5e20] transition ml-auto"
                        @click="nextStep" v-if="step < 5">
                        Suivant
                    </button>

                    <button type="submit"
                        class="px-8 py-3 bg-gradient-to-r from-[#024533] to-[#4caf50] text-white rounded-lg font-semibold hover:from-[#1b5e20] hover:to-[#2e7d32] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#2e7d32] focus:ring-opacity-50 flex items-center justify-center space-x-2 w-full"
                        v-if="step === 5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <span>Calculer mon empreinte</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const form = reactive<Record<string, any>>({})
        const questions = ref<any[]>([])
        const step = ref(0)
        const errors = reactive<Record<string, string>>({})
        const router = useRouter()

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        const getCategoryName = (step: number): string => {
            switch (step) {
                case 0: return 'Transport'
                case 1: return 'Logement'
                case 2: return 'Alimentation'
                case 3: return 'Numerique'
                case 4: return 'Consommation'
                case 5: return 'Loisirs'
                default: return ''
            }
        }

        const fetchCategory = async (category: string): Promise<void> => {
            try {
                const response = await axios.get('http://10.61.11.244:3010/form', {
                    headers: { 'category': category }
                })
                if (response.data) {
                    questions.value = response.data.data
                    questions.value.forEach(question => {
                        if (!(question.id in form)) {
                            form[question.id] = ''
                        }
                    })
                }
            } catch (error) {
                console.error('Erreur lors de la récupération de la catégorie :', error)
            }
        }

        const validateStep = (): boolean => {
            let isValid = true;
            Object.keys(errors).forEach(key => errors[key] = ''); 
            questions.value.forEach(question => {
                if (form[question.id] === undefined || form[question.id] === '') {
                    isValid = false;
                    errors[question.id] = 'Ce champ est obligatoire';
                }
                console.log(`Question ${question.id}: ${form[question.id]}`); 
            });
            return isValid;
        }

        const nextStep = () => {
            if (validateStep()) {
                if (step.value < 5) {
                    step.value++
                    fetchCategory(getCategoryName(step.value))
                    scrollToTop()
                }
            }
        }

        const prevStep = () => {
            if (step.value > 0) {
                step.value--
                fetchCategory(getCategoryName(step.value))
                scrollToTop()
            }
        }

        const handleSubmit = async () => {
            const userId = localStorage.getItem('userId')
            const payload = {
                userId,
                answers: { ...form }
            }

            try {
                await axios.post('http://10.61.11.244:3010/form', payload)
                console.log('Form submitted successfully')
                router.push('/')
            } catch (error) {
                console.error('Error submitting form:', error)
            }
        }

        onMounted(() => {
            fetchCategory(getCategoryName(step.value))
        })

        return {
            form,
            questions,
            step,
            errors,
            nextStep,
            prevStep,
            handleSubmit
        }
    }
})
</script>
