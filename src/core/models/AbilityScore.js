import SkillScore from './SkillScore'

export default class AbilityScore {
  _name
  _score

  constructor(name, score = 1) {
    this._name = name
    this._score = score
  }

  /**
   * Ability name
   */

  get name() {
    return this._name
  }

  /**
   * Ability score
   */

  get score() {
    return this._score
  }

  set score(score) {
    this._score = score
  }

  /**
   * Ability modifier
   */

  get modifier() {
    return Math.floor((this._score - 10) / 2)
  }

  /**
   * Generates an array of skills related to this ability score.
   *
   * @returns array
   */
  static generateSkills() {
    if (typeof this.skillsRelated !== 'function') {
      throw new Error(`${this.name} must implement a static skillsRelated method`)
    }
    return this.skillsRelated().map((skillName) => new SkillScore(skillName))
  }
}
