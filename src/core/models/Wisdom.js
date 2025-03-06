import AbilityScore from './AbilityScore'

export default class Wisdom extends AbilityScore {
  static slug = 'WIS'

  constructor(level = 1) {
    super('Wisdom')
    this.level = level
  }

  static skillsRelated() {
    return ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival']
  }
}
