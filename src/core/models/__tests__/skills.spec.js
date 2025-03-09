import Character from '@/core/models/Character'
import { expect, test } from 'vitest'

test('Character skill modifiers work correctly', () => {
  const character = new Character()

  expect(character.findSkill('Athletics').modifier).toBe(-5)

  character.proficencyBonus = 2
  character.statblock.STR.score = 20
  character.findSkill('Athletics').proficency = true

  expect(character.findSkill('Athletics').modifier).toBe(7)
})
