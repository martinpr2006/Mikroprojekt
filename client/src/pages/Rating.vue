<script setup>
import { useRouter, useRoute } from 'vue-router'
import StarRating from '../components/StarRating.vue'

const router = useRouter()
const route = useRoute()

const subjectName = route.query.subject
const teacherName = route.query.teacher

const goToTeacherRating = () => {
    router.push({
        path: '/teacher-rating',
        query: 
        {
            subject: subjectName,
            teacher: teacherName
        }
    })
}

const goBack = () => {
    router.push({path: '/'})
}
</script>

<template>
    <div class="columns is-centered is-vcentered full-height">
        <div class="column is-4">
            <div class="columns is-variable is-3 mt-6">
                <div class="column">
                    <div class="box fixed-width-box  is-pulled-left">
                        <div class="content has-text-left">
                            <p class="has-text-weight-semibold">{{ subjectName }}</p>
                            <div>
                                <star-rating v-model="userRating" :max-stars="5" @ratingData="updateRating" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="box fixed-width-box is-pulled-right clickable" @click="goToTeacherRating">
                        <div class="content has-text-left">
                            <p class="has-text-weight-semibold">{{ teacherName }}</p>
                            <div class="stars mt-3">
                                ★★★★★
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field mt-5">
                <div class="control">
                    <textarea class="textarea" placeholder="Sisesta oma kommentaarid..." rows="8"></textarea>
                </div>
            </div>

            <div class="field is-grouped mt-5">
                <div class="control">
                    <button class="button is-primary">
                        Salvesta
                    </button>
                </div>
                <div class="control">
                    <button class="button is-light" @click="goBack">
                        Tagasi
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      userRating: 0,
    };
  },
  components: {
    StarRating,
  },
  methods: {
    updateRating(newRating) {
      // Handle the new rating as needed.
      this.userRating = newRating;
    },
  },
};
</script> -->

<style scoped>
.full-height {
    min-height: 100vh;
}

.fixed-width-box {
    padding-right: 60px;
}

.stars {
    font-size: 1.5rem;
    color: #ffd700;
    letter-spacing: 2px;
}

.clickable {
    cursor: pointer;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.clickable:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
</style>