<script>
import { inject } from 'vue'
import CharacterSkill from './CharacterSkill.vue'

export default {
  name: 'CharacterSkillList',
  components: { CharacterSkill },
  props: {
    stat: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const character = inject('character')
    const skillNames = props.stat.constructor.skillsRelated()
    const skills = character.skills.filter((skill) => skillNames.includes(skill.name))

    return {
      character,
      skills,
    }
  },
}
</script>
<template>
  <div class="py-3" v-if="skills.length > 0">
    <span class="font-bold">Skills related:</span>
    <CharacterSkill v-for="skill in skills" :key="skill.name" :skill-name="skill.name" />
  </div>
</template>
