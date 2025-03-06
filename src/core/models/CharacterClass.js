export default class CharacterClass {
  _name
  _level

  constructor(name, level = 1) {
    this._name = name
    this._level = level
  }

  /**
   * Class name
   */

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  /**
   * Class level
   */

  get level() {
    return this._level
  }

  set level(level) {
    if (level < 1 || level > 20) {
      throw new Error('Level must be between 1 and 20.')
    }

    this._level = level
  }
}
