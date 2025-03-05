import AbilityScore from './AbilityScore'

export default class Dexterity extends AbilityScore {
  static slug = 'DEX'

  constructor(level = 1) {
    super('Dexterity')
    this.level = level
  }

  static skillsRelated() {
    return ['Acrobatics', 'Sleight of Hand', 'Stealth']
  }
}
