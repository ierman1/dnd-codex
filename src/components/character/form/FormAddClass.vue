<script>
import { computed, inject, ref } from 'vue'
import CharacterClass from '@/core/models/CharacterClass'
import AutocompleteBox from './AutocompleteBox.vue'

export default {
  name: 'FormAddClass',
  components: { AutocompleteBox },
  emits: ['addingClass'],
  setup(props, ctx) {
    const character = inject('character')

    /**
     * Class fetching
     */
    const { result, loading } = CharacterClass.fetchClasses()
    const fetchedClasses = computed(() => result.value?.classes ?? [])

    /**
     * Class parameters
     */
    const className = ref('')
    const classIndex = ref(null)
    const classLevel = ref(1)

    const buttonDisabled = computed(() => !className.value || !classLevel.value)

    /**
     * Class management methods
     */
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

    const methodError = ref('')

    const selectClass = (characterClass) => {
      className.value = characterClass.name
      classIndex.value = characterClass.index
    }

    return {
      className,
      buttonDisabled,
      classLevel,
      fetchedClasses,
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
    <AutocompleteBox
      label="Add a new class"
      placeholder="Class name"
      :items="fetchedClasses"
      :loading="loading"
      v-model:name="className"
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
