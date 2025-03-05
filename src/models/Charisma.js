import AbilityScore from './AbilityScore'

export default class Charisma extends AbilityScore {
  static slug = 'CHA'

  constructor(level = 1) {
    super('Charisma')
    this.level = level
  }

  static skillsRelated() {
    return ['Deception', 'Intimidation', 'Performance', 'Persuasion']
  }
}
