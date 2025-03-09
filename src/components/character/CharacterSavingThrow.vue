<script>
import { computed, inject } from 'vue'
import ScoreModifier from './ScoreModifier.vue'

export default {
  name: 'CharacterSavingThrow',
  components: { ScoreModifier },
  props: {
    stat: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const character = inject('character')
    const savingThrow = computed(() => props.stat.savingThrow)

    return {
      character,
      savingThrow,
    }
  },
}
</script>
<template>
  <div class="py-3 border-b-1">
    <span class="font-bold inline-block mr-2">Saving throw:</span>
    <input type="checkbox" v-model="savingThrow.proficency" />
    <ScoreModifier :number="savingThrow.modifier" />
  </div>
</template>
