<script setup>
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
</script>

<template>
    <div class="columns is-centered">
        <div class="column is-4 mt-6">
            <div class="title has-text-centered">
                Ainevaldkonnad
            </div>
            <div class="field has-addons mb-5 mt-6">
                <div class="control is-expanded">
                    <input class="input is-normal" type="text" placeholder="Sisesta õppeaine nimetus" />
                </div>
                <div class="control">
                    <button class="button is-primary">Search</button>
                </div>
            </div>
            <div class="card mb-5" v-for="(subject, i) in subjects" :key="i">
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