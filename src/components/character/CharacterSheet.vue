<script>
import { reactive } from 'vue'
import Character from '@/core/models/Character'

export default {
  name: 'CharacterSheet',
  setup() {
    const character = reactive(new Character())

    return {
      character,
    }
  },
}
</script>
<template>
  <div class="m-3 p-3 border-1">
    <input
      type="text"
      v-model="character.name"
      placeholder="Character name"
      class="block border-0 border-b-1 mb-3 outline-0 text-3xl w-full"
    />
    <input
      type="text"
      v-model="character.species"
      placeholder="Species"
      class="border-0 border-b-1 outline-0 text-lg"
    />
    <span class="text-lg">Level {{ character.level }}</span>
  </div>
</template>
