<script>
import { computed, inject, ref } from 'vue'
import CharacterClass from '@/core/models/CharacterClass'
import SearchBox from './SearchBox.vue'

export default {
  name: 'FormAddClass',
  components: { SearchBox },
  emits: ['addingClass'],
  setup(props, ctx) {
    const character = inject('character')

    const className = ref('')
    const classIndex = ref(null)

    const buttonDisabled = computed(() => !className.value || !classLevel.value)

    const classLevel = ref(1)

    const { result, loading } = CharacterClass.fetchClasses(className)
    const searchedClasses = computed(() => result.value?.classes ?? [])

    const methodError = ref('')

    const addClass = () => {
      methodError.value = null

      try {
        character.addClass(className.value, classIndex.value, classLevel.value)
      } catch (error) {
        methodError.value = error
        return
      } finally {
        className.value = ''
        classIndex.value = null
        classLevel.value = 1
      }

      ctx.emit('addingClass')
    }
    const selectClass = (characterClass) => {
      className.value = characterClass.name
      classIndex.value = characterClass.index
    }

    return {
      character,
      className,
      classIndex,
      buttonDisabled,
      classLevel,
      searchedClasses,
      loading,
      methodError,
      addClass,
      selectClass,
    }
  },
}
</script>
<template>
  <div class="py-3 flex">
    <SearchBox
      label="Add a new class"
      placeholder="Class name"
      :items="searchedClasses"
      :loading="loading"
      item-identifier="index"
      v-model:name="className"
      @selecting-item="selectClass"
      @update:name="classIndex = null"
    />
    <div class="ml-3">
      <span class="inline-block font-bold mb-1">Level</span>
      <input type="number" v-model="classLevel" class="block p-3 border-1 rounded-sm" />
    </div>
    <div class="flex">
      <button
        :disabled="buttonDisabled"
        class="self-end inline-block px-5 py-3 ml-2 bg-blue-100 hover:bg-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer rounded-sm"
        @click="addClass"
      >
        Add class
      </button>
    </div>
  </div>
  <span class="text-red-600" v-if="methodError">{{ methodError }}</span>
</template>
