<template>
  <div class="star-rating">
    <div
      v-for="i in maxStars"
      :key="i"
      @click="setRating(i)"
      @mouseenter="hoverRating(i)"
      @mouseleave="resetHover"
      :class="['star', i <= (hoverValue || rating) ? 'filled' : '']"
    >
      ★
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    maxStars: {
      type: Number,
      default: 5,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const rating = ref(props.modelValue);
    const hoverValue = ref(0);

    // Watch for prop changes to keep in sync
    watch(() => props.modelValue, (newValue) => {
      rating.value = newValue;
    });

    const setRating = (newRating) => {
      rating.value = newRating;
      emit('update:modelValue', newRating);
    };

    const hoverRating = (value) => {
      hoverValue.value = value;
    };

    const resetHover = () => {
      hoverValue.value = 0;
    };

    return {
      rating,
      hoverValue,
      hoverRating,
      resetHover,
      setRating,
    };
  },
};
</script>

<style scoped>
.star-rating {
  display: inline-flex;
  gap: 2px;
}

.star {
  font-size: 24px;
  cursor: pointer;
  color: rgb(222, 222, 222);
  transition: color 0.15s ease;
  user-select: none;
}

.filled {
  color: gold;
}

.star:hover {
  transform: scale(1.1);
}
</style>