import AbilityScore from './AbilityScore'

export default class Strength extends AbilityScore {
  static slug = 'STR'

  constructor(level = 1) {
    super('Strength')
    this.level = level
  }

  static skillsRelated() {
    return ['Athletics']
  }
}
