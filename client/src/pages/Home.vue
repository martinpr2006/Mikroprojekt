<script setup>
import { useRouter } from 'vue-router'

const subjects = [
    'Matemaatika',
    'Hajusrakenduste alused',
    'Vene keel',
    'Serveri poolsed tehnoloogiad veebi rakenduste loomiseks',
    'Küberturbe alused',
    'Testimis alused ja testimisplaan',
    'Riistvaralähedane programmeerimine',
    'Individuaalne valikaine (Arvutimängude loomine)',
    'Tarkvaraarenduse meetodid',
    'Kirjandiõpetus',
    'Rühmajuhataja tund',
    'Andmebaasid',
    'Blockchain',
    'Projekt',
    'Soome keel'
];

const router = useRouter()

const goToRating = () => {
    router.push('/rating')
}
</script>

<template>
    <div class="columns is-centered">
        <div class="column is-4 mt-6">
            <div class="title has-text-centered">
                Õppeained
            </div>
            <div class="card mb-5" v-for="(subject, i) in subjects" :key="i" @click="goToRating">
                <div class="card-content">
                    <div class="content">{{ subject }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card:hover {
    cursor: pointer;
}
</style>