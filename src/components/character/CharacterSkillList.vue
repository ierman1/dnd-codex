<script>
import { inject } from 'vue'
import ScoreModifier from './ScoreModifier.vue'

export default {
  name: 'CharacterSkillList',
  components: { ScoreModifier },
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

    const findSkillIndex = (skillName) =>
      character.skills.findIndex((skill) => skill.name === skillName)

    const skillModifier = (skillName) => {
      const proficency = character.skills[findSkillIndex(skillName)].proficency

      return props.stat.modifier + (proficency ? character.proficencyBonus : 0)
    }

    return {
      character,
      skills,
      findSkillIndex,
      skillModifier,
    }
  },
}
</script>
<template>
  <div class="py-3" v-if="skills.length > 0">
    <span class="font-bold">Skills related:</span>
    <ul>
      <li v-for="skill in skills" :key="skill.name">
        <input type="checkbox" v-model="character.skills[findSkillIndex(skill.name)].proficency" />
        <ScoreModifier :number="skillModifier(skill.name)" />
        <span class="inline-block ml-2">{{ skill.name }}</span>
      </li>
    </ul>
  </div>
</template>
