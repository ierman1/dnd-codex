import AbilityScore from './AbilityScore'

export default class Dexterity extends AbilityScore {
  static slug = 'DEX'

  constructor(character, level = 1) {
    super('Dexterity', character)
    this.level = level
  }

  static skillsRelated() {
    return ['Acrobatics', 'Sleight of Hand', 'Stealth']
  }
}
