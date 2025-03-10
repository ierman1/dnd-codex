export default class Subclass {
  _name
  _characterClass

  constructor(name, characterClass) {
    this._name = name
    this._characterClass = characterClass
  }

  /**
   * Subclass name
   */

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  /**
   * Subclass class
   */

  get characterClass() {
    return this._characterClass
  }

  set characterClass(characterClass) {
    this._characterClass = characterClass
  }
}
