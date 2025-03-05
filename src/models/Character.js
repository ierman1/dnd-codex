/* eslint-disable no-unused-private-class-members */

import CharacterClass from './CharacterClass'
import Charisma from './Charisma'
import Constitution from './Constitution'
import Dexterity from './Dexterity'
import Intelligence from './Intelligence'
import Strength from './Strength'
import Wisdom from './Wisdom'

export default class Character {
  static MAX_LEVEL = 20

  _statblock
  _skills
  _classes
  _name
  _proficency

  constructor() {
    this._statblock = {
      STR: new Strength(),
      DEX: new Dexterity(),
      CON: new Constitution(),
      INT: new Intelligence(),
      WIS: new Wisdom(),
      CHA: new Charisma(),
    }

    this._skills = [
      ...Strength.generateSkills(),
      ...Dexterity.generateSkills(),
      ...Constitution.generateSkills(),
      ...Intelligence.generateSkills(),
      ...Wisdom.generateSkills(),
      ...Charisma.generateSkills(),
    ]
  }

  /**
   * Character name
   */

  get name() {
    return this._name
  }

  set name(name) {
    if (!name) {
      throw new Error("The character name can't be empty.")
    }

    this._name = name
  }

  /**
   * Character classes
   */

  get classes() {
    return this.classes
  }

  set #classesSetter(classes) {
    if (typeof classes !== 'object') {
      throw new Error('The attribute classes must be an array of Character class.')
    }

    this._classes = classes
  }

  get level() {
    return this.classes.reduce((accumulator, current) => accumulator + current.level)
  }

  /**
   * Adds a new class to the character. Throws an error if the total
   * level is greater than 20.
   *
   * @param {String} name
   * @param {Number} level
   */
  addClass = (name, level = 1) => {
    if (this.level + level > self.MAX_LEVEL) {
      throw new Error(`Total level of the character can't be greater than ${self.MAX_LEVEL}.`)
    }

    this.classes.push(new CharacterClass(name, level))
  }

  /**
   * Character proficency
   */

  get proficency() {
    return this._proficency
  }

  set proficency(proficency) {
    if (proficency < 0) {
      throw new Error("The character proficency can't be less than 0.")
    }

    this._proficency = proficency
  }

  /**
   * Character stats
   */

  get statblock() {
    return this._statblock
  }

  set statblock(statblock) {
    this._statblock = statblock
  }
}
