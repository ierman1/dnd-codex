import AbilityScore from './AbilityScore'

export default class Wisdom extends AbilityScore {
  static slug = 'WIS'

  constructor(character, level = 1) {
    super('Wisdom', character)
    this.level = level
  }

  static skillsRelated() {
    return ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival']
  }
}
