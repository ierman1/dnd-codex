/* eslint-disable no-unused-private-class-members */
export default class SkillScore {
  _name
  _character
  _abilityScore
  _proficency
  _expertise

  constructor(name, character, abilityScore, proficency = false, expertise = false) {
    this._name = name
    this._character = character
    this._abilityScore = abilityScore
    this._proficency = proficency
    this._expertise = expertise
  }

  /**
   * Skill name
   */

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
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
   * Stat related
   */

  get abilityScore() {
    return this._abilityScore
  }

  set #abilityScore(abilityScore) {
    this._abilityScore = abilityScore
  }

  /**
   * Skill proficency
   */

  get proficency() {
    return this._proficency
  }

  set proficency(proficency) {
    this._proficency = proficency
  }

  /**
   * Skill expertise
   */

  get expertise() {
    return this._expertise
  }

  set expertise(expertise) {
    if (expertise && !this.proficency) this.proficency = true

    this._expertise = expertise
  }

  /**
   * Modifier
   */
  get modifier() {
    const multiplier = (this.proficency ? 1 : 0) + (this.expertise ? 1 : 0)

    return this.abilityScore.modifier + this.character.proficencyBonus * multiplier
  }
}
