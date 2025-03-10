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

    const searchTerm = ref('')
    const buttonDisabled = computed(() => !searchTerm.value || !classLevel.value)

    const classLevel = ref(1)

    const { result, loading } = CharacterClass.fetchClasses(searchTerm)
    const searchedClasses = computed(() => result.value?.classes ?? [])

    const methodError = ref('')

    const addClass = () => {
      methodError.value = null

      try {
        character.addClass(searchTerm.value, classLevel.value)
      } catch (error) {
        methodError.value = error
        return
      } finally {
        searchTerm.value = ''
        classLevel.value = 1
      }

      ctx.emit('addingClass')
    }
    const selectClass = (className) => (searchTerm.value = className)

    return {
      character,
      searchTerm,
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
      item-identifier="name"
      v-model="searchTerm"
      @selecting-item="selectClass"
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
