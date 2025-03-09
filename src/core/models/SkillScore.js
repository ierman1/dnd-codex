export default class SkillScore {
  constructor(name, proficency = false, expertise = false) {
    this._name = name
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
}
