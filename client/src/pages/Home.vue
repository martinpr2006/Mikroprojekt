<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const subjects = ref([]);

const goToRating = () => {
    router.push('/rating');
}

onMounted(async () => {
    try {
        const res = await fetch('http://localhost:3000/subjects');
        subjects.value = await res.json();
    } catch (err) {
        console.error(err);
    }
});
</script>

<template>
    <div class="columns is-centered">
        <div class="column is-4 mt-6">
            <div class="title has-text-centered">
                Õppeained
            </div>
            <div class="card mb-5" v-for="subject in subjects" :key="subject.id" @click="goToRating">
                <div class="card-content">
                    <p class="is-size-5">{{ subject.subject }}</p>
                    <p class="is-size-7">{{ subject.teacher }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    min-height: 70px;
    display: flex;
    justify-content: center;
    text-align: center;
}

.card:hover {
    cursor: pointer;
    transform: scale(1.03);
}
</style>