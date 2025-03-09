import Character from '@/core/models/Character'
import { expect, test } from 'vitest'

test('Character instance works correctly', () => {
  const character = new Character()

  expect(character.name).toBe('')
  expect(character.level).toBe(0)
  expect(character.skills.length).toBe(18)
  expect(Object.keys(character.statblock).length).toBe(6)
})

test('Modifying character classes updates the global level correctly', () => {
  const character = new Character()

  expect(character.classes.length).toBe(0)

  character.addClass('Paladin', 6)

  expect(character.classes.length).toBe(1)
  expect(character.level).toBe(6)

  character.addClass('Monk', 2)

  expect(character.classes.length).toBe(2)
  expect(character.level).toBe(8)

  expect(() => character.addClass('Fighter', 15)).toThrowError('Total level')
  expect(() => character.addClass('Fighter', 25)).toThrowError('Class level')
})
