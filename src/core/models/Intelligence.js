import AbilityScore from './AbilityScore'

export default class Intelligence extends AbilityScore {
  static slug = 'INT'

  constructor(character, level = 1) {
    super('Intelligence', character)
    this.level = level
  }

  static skillsRelated() {
    return ['Arcana', 'History', 'Investigation', 'Nature', 'Religion']
  }
}
