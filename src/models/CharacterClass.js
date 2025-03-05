export default class CharacterClass {
  constructor(name, level = 1) {
    this.name = name
    this.level = level
  }

  /**
   * Class name
   */

  get name() {
    return this.name
  }

  set name(name) {
    if (!name) {
      throw new Error("The class name can't be empty.")
    }

    this.name = name
  }

  /**
   * Class level
   */

  get level() {
    return this.level
  }

  set level(level) {
    if (level < 1 || level > 20) {
      throw new Error('Level must be between 1 and 20.')
    }

    this.level = level
  }

  toString = () => {
    return `${this.name} ${this.level}`
  }
}
