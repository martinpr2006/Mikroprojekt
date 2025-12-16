<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import StarRating from '../components/StarRating.vue'

const router = useRouter()
const route = useRoute()

const subjectId = route.query.id
const subjectName = route.query.subject
const teacherName = route.query.teacher
const userRating = ref(0)
const comment = ref('')
const errorMessage = ref('')

const saveRating = async () => {
    if (userRating.value === 0) {
        errorMessage.value = 'Palun vali hinnang'
        return
    }

    errorMessage.value = ''

    try {
        const response = await fetch('http://localhost:3000/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject_id: subjectId,
                rating: userRating.value,
                comment: comment.value || null,
            }),
        })

        router.push({ path: '/' })
    } catch (error) {
        errorMessage.value = error.message
        console.error('Hinnangu salvestamine ebaõnnestus:', error)
    }
}

const goBack = () => {
    router.push({path: '/'})
}
</script>

<template>
    <div class="columns is-centered is-vcentered full-height">
        <div class="column is-10-mobile is-8-tablet is-6-desktop is-4-widescreen">
            <div class="mt-6">
                <div class="box subject-box">
                    <div class="content">
                        <p class="is-size-4 has-text-weight-semibold mb-2">{{ subjectName }}</p>
                        <p class="is-size-6 has-text-grey mb-4">{{ teacherName }}</p>
                        <div class="rating-container">
                            <star-rating v-model="userRating" :max-stars="5" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="field mt-5">
                <label class="label">Kommentaarid</label>
                <div class="control">
                    <textarea 
                        v-model="comment" 
                        class="textarea" 
                        placeholder="Sisesta oma kommentaarid..." 
                        rows="8"
                    ></textarea>
                </div>
            </div>
            <div v-if="errorMessage" class="notification is-danger is-light mt-4">
                {{ errorMessage }}
            </div>
            <div class="field is-grouped is-grouped-right mt-5">
                <div class="control">
                    <button class="button is-light" @click="goBack">
                        Tagasi
                    </button>
                </div>
                <div class="control">
                    <button class="button is-primary" @click="saveRating">
                        Salvesta
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.full-height {
    min-height: 100vh;
    padding: 1rem;
}

.subject-box {
    text-align: center;
    padding: 2rem;
}

.rating-container {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
}

.textarea {
    resize: vertical;
    min-height: 150px;
}

.textarea:focus {
    border-color: #3273dc;
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.button {
    min-width: 100px;
}

@media screen and (max-width: 768px) {
    .subject-box {
        padding: 1.5rem;
    }
    
    .is-grouped-right {
        justify-content: stretch;
    }
    
    .is-grouped-right .control {
        flex: 1;
    }
    
    .button {
        width: 100%;
    }
}
</style>