/* eslint-disable no-unused-private-class-members */
import SavingThrow from './SavingThrow'
import SkillScore from './SkillScore'

export default class AbilityScore {
  _name
  _character
  _score
  _savingThrow

  constructor(name, character, score = 1) {
    this._name = name
    this._character = character
    this._score = score
    this._savingThrow = new SavingThrow(character, this)
  }

  /**
   * Ability name
   */

  get name() {
    return this._name
  }

  /**
   * Character bound
   */

  get character() {
    return this._character
  }

  set #character(character) {
    this._character = character
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
   * Saving throw
   */

  get savingThrow() {
    return this._savingThrow
  }

  set #savingThrow(savingThrow) {
    this._savingThrow = savingThrow
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
  generateSkills = () => {
    return this.constructor
      .skillsRelated()
      .map((skillName) => new SkillScore(skillName, this.character, this))
  }
}
