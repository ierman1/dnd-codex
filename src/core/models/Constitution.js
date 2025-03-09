import AbilityScore from './AbilityScore'

export default class Constitution extends AbilityScore {
  static slug = 'CON'

  constructor(character, level = 1) {
    super('Constitution', character)
    this.level = level
  }

  static skillsRelated() {
    return []
  }
}
