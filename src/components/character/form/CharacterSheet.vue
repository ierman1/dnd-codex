<script>
import { provide, reactive, computed } from 'vue'
import Character from '@/core/models/Character'
import ClassList from './ClassList.vue'
import CharacterSheetSection from './CharacterSheetSection.vue'
import CharacterStat from './CharacterStat.vue'

import Constitution from '@/core/models/Constitution'
import Strength from '@/core/models/Strength'
import Dexterity from '@/core/models/Dexterity'
import Intelligence from '@/core/models/Intelligence'
import Wisdom from '@/core/models/Wisdom'
import Charisma from '@/core/models/Charisma'

export default {
  name: 'CharacterSheet',
  components: { ClassList, CharacterSheetSection, CharacterStat },
  setup() {
    const character = reactive(new Character())
    provide('character', character)

    const stats = computed(() => [
      Constitution.slug,
      Strength.slug,
      Dexterity.slug,
      Intelligence.slug,
      Wisdom.slug,
      Charisma.slug,
    ])

    return {
      character,
      stats,
    }
  },
}
</script>
<template>
  <!-- CHARACTER BASIC DATA -->
  <CharacterSheetSection>
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
  </CharacterSheetSection>

  <!-- CHARACTER STATS -->
  <div class="flex m-3 mb-0">
    <CharacterStat v-for="stat in stats" :key="stat" :stat-slug="stat" />
  </div>

  <!-- CHARACTER CLASSES -->
  <CharacterSheetSection title="Classes">
    <ClassList />
  </CharacterSheetSection>
</template>
