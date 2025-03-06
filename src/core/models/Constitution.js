import AbilityScore from './AbilityScore'

export default class Constitution extends AbilityScore {
  static slug = 'CON'

  constructor(level = 1) {
    super('Constitution')
    this.level = level
  }

  static skillsRelated() {
    return []
  }
}
