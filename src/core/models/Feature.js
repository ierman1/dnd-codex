export default class Feature {
  _index
  _name
  _description

  constructor(name, description, index = null) {
    this._name = name
    this._description = description
    this._index = index
  }

  /**
   * Feat name
   */

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  /**
   * Feat description
   */

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  /**
   * Feat index
   */

  get index() {
    return this._index
  }

  set index(index) {
    this._index = index
  }
}
