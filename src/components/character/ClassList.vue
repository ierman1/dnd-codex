<script>
import { useQuery } from '@vue/apollo-composable'
import SearchBox from '../SearchBox.vue'
import gql from 'graphql-tag'
import { computed, inject, ref } from 'vue'

export default {
  name: 'ClassList',
  components: { SearchBox },
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
  <div class="p-1 columns-2">
    <div v-for="characterClass in characterClasses" :key="characterClass.name" class="border-1 p-3">
      <h3>
        <span class="text-2xl">{{ characterClass.name }}</span>
        <span class="text-xl">Level {{ characterClass.level }}</span>
      </h3>
    </div>
  </div>
  <SearchBox
    label="Class"
    :items="searchedClasses"
    :loading="loading"
    item-identifier="name"
    v-model="searchTerm"
    @selecting-item="addClass"
  />
</template>
