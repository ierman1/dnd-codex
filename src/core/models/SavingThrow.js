/* eslint-disable no-unused-private-class-members */
export default class SavingThrow {
  _character
  _abilityScore
  _proficency

  constructor(character, abilityScore, proficency = false) {
    this._character = character
    this._abilityScore = abilityScore
    this._proficency = proficency
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
   * Modifier
   */
  get modifier() {
    const multiplier = this.proficency ? 1 : 0

    return this.abilityScore.modifier + this.character.proficencyBonus * multiplier
  }
}
