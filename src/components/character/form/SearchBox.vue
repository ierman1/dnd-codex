<script>
import { ref } from 'vue'

export default {
  name: 'SearchBox',
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    loading: {
      required: false,
      default: false,
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
  },
  emits: ['selectingItem', 'update:name'],
  setup(props, ctx) {
    const selectItem = (item) => ctx.emit('selectingItem', item)

    /**
     * Input focus management
     */
    const dropdownVisible = ref(false)
    const showDropdown = () => (dropdownVisible.value = true)
    const hideDropdown = () => setTimeout(() => (dropdownVisible.value = false), 100)

    const updateName = (event) => {
      ctx.emit('update:name', event.target.value)
    }

    return {
      dropdownVisible,
      showDropdown,
      hideDropdown,
      updateName,
      selectItem,
    }
  },
}
</script>
<template>
  <div class="relative">
    <span class="inline-block font-bold mb-1">{{ label }}</span>
    <input
      type="text"
      class="block border-1 rounded-sm p-3 outline-0 w-100"
      :value="name"
      :placeholder="placeholder"
      @focusin="showDropdown"
      @focusout="hideDropdown"
      @input="updateName"
    />
    <div
      v-if="dropdownVisible"
      class="border-1 inline-block p-3 mt-2 rounded-sm w-100 absolute bg-white"
    >
      <span v-if="loading">Loading...</span>
      <template v-else>
        <ul v-if="items.length > 0">
          <li
            v-for="item in items"
            :key="item.index"
            @click="selectItem({ index: item.index, name: item.name })"
            class="px-3 py-2 hover:bg-blue-100 cursor-pointer rounded-sm"
          >
            {{ item.name }}
          </li>
        </ul>
        <span v-else>No items found.</span>
      </template>
    </div>
  </div>
</template>
