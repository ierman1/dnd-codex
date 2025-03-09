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
   * @param {Character} character
   *
   * @returns array
   */
  generateSkills = (character) => {
    return this.constructor
      .skillsRelated()
      .map((skillName) => new SkillScore(skillName, character, this))
  }
}
