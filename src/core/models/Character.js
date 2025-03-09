/* eslint-disable no-unused-private-class-members */

import { reactive } from 'vue'
import CharacterClass from './CharacterClass'
import Charisma from './Charisma'
import Constitution from './Constitution'
import Dexterity from './Dexterity'
import Intelligence from './Intelligence'
import Strength from './Strength'
import Wisdom from './Wisdom'

export default class Character {
  static MAX_LEVEL = 20

  _name
  _species
  _classes
  _statblock
  _proficency
  _skills

  constructor() {
    this.proficencyBonus = 1
    this._classes = reactive([])

    this._statblock = {
      STR: new Strength(),
      DEX: new Dexterity(),
      INT: new Intelligence(),
      WIS: new Wisdom(),
      CHA: new Charisma(),
      CON: new Constitution(),
    }

    this._skills = [
      ...Strength.generateSkills(),
      ...Dexterity.generateSkills(),
      ...Intelligence.generateSkills(),
      ...Wisdom.generateSkills(),
      ...Charisma.generateSkills(),
      ...Constitution.generateSkills(),
    ]
  }

  /**
   * Character name
   */

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  /**
   * Character species
   */

  get species() {
    return this._species
  }

  set species(species) {
    this._species = species
  }

  /**
   * Character classes
   */

  get classes() {
    return this._classes
  }

  set #classes(classes) {
    if (typeof classes !== 'object') {
      throw new Error('The attribute classes must be an array of Character class.')
    }

    this._classes = classes
  }

  get level() {
    if (this.classes.length > 0) {
      return this.classes.reduce((sum, current) => sum + current.level, 0)
    }

    return 0
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
   * Character stats
   */

  get statblock() {
    return this._statblock
  }

  set #statblock(statblock) {
    this._statblock = statblock
  }

  /**
   * Character proficency
   */

  get proficencyBonus() {
    return this._proficencyBonus
  }

  set proficencyBonus(proficencyBonus) {
    if (proficencyBonus < 0) {
      throw new Error("The character proficency can't be less than 0.")
    }

    this._proficencyBonus = proficencyBonus
  }

  /**
   * Character skills
   */

  get skills() {
    return this._skills
  }

  set #skills(skills) {
    this._skills = skills
  }
}
