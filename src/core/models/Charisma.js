import AbilityScore from './AbilityScore'

export default class Charisma extends AbilityScore {
  static slug = 'CHA'

  constructor(character, level = 1) {
    super('Charisma', character)
    this.level = level
  }

  static skillsRelated() {
    return ['Deception', 'Intimidation', 'Performance', 'Persuasion']
  }
}
