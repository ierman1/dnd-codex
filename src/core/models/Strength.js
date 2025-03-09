import AbilityScore from './AbilityScore'

export default class Strength extends AbilityScore {
  static slug = 'STR'

  constructor(character, level = 1) {
    super('Strength', character)
    this.level = level
  }

  static skillsRelated() {
    return ['Athletics']
  }
}
