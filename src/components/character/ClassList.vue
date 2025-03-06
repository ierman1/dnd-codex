<script>
import { useQuery } from '@vue/apollo-composable'
import SearchBox from '../SearchBox.vue'
import gql from 'graphql-tag'
import { computed, inject, ref } from 'vue'
import ClassItem from './ClassItem.vue'

export default {
  name: 'ClassList',
  components: { SearchBox, ClassItem },
  setup() {
    const searchTerm = ref('')

    const character = inject('character')
    const characterClasses = computed(() => character.classes)

    const { result, loading } = useQuery(
      gql`
        query classes($name: String) {
          classes(name: $name) {
            index
            name
          }
        }
      `,
      {
        name: searchTerm,
      },
    )

    const searchedClasses = computed(() => result.value?.classes ?? [])

    const addClass = (className) => character.addClass(className)

    return {
      searchTerm,
      searchedClasses,
      addClass,
      loading,
      characterClasses,
    }
  },
}
</script>
<template>
  <SearchBox
    label="Add a new class"
    :items="searchedClasses"
    :loading="loading"
    item-identifier="name"
    v-model="searchTerm"
    @selecting-item="addClass"
  />
  <div class="mt-3">
    <ClassItem
      v-for="characterClass in characterClasses"
      :key="characterClass.name"
      :character-class="characterClass"
    />
  </div>
</template>
