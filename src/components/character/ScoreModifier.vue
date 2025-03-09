<script>
import { computed } from 'vue'

export default {
  name: 'ScoreModifier',
  props: {
    number: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      default: 'sm',
    },
  },
  setup(props) {
    const componentSize = computed(
      () =>
        ({
          sm: '',
          lg: 'w-12 h-12 p-3 rounded-sm',
        })[props.size],
    )

    const scoreSign = computed(() =>
      props.number > 0
        ? { sign: '+', color: props.size === 'sm' ? 'text-green-500' : 'bg-green-100' }
        : { sign: '', color: props.size === 'sm' ? 'text-red-500' : 'bg-red-100' },
    )

    return {
      scoreSign,
      componentSize,
    }
  },
}
</script>
<template>
  <span :class="['inline-block ml-2 text-center font-bold', componentSize, scoreSign.color]"
    >{{ scoreSign.sign }}{{ number }}</span
  >
</template>
