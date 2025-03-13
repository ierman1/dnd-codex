import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import Subclass from './Subclass'
import Feature from './Feature'
import { ref } from 'vue'

export default class CharacterClass {
  _name
  _index
  _level
  _subclass
  _features

  constructor(name, index = null, level = 1) {
    this._name = name
    this._index = index
    this._level = level

    this._subclass = ref(null)
    this._features = []
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
   * Class index
   */

  get index() {
    return this._index
  }

  set index(index) {
    this._index = index
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

  /**
   * Class index
   */

  get subclass() {
    return this._subclass
  }

  set subclass(subclass) {
    if (!(subclass instanceof Subclass))
      throw new Error('The subclass must be an instance of Subclass')

    this._subclass.value = subclass
  }

  /**
   * Adds an instance of a subclass to this class.
   *
   * @param {String} name
   */
  setSubclass = (name) => (this.subclass = new Subclass(name, this))

  /**
   * Class features
   */

  get features() {
    return this._features
  }

  set features(features) {
    if (typeof features !== 'object') throw new Error('The features property must be an array.')

    this._features = features
  }

  /**
   * Pushes a new feature into the class features array.
   *
   * @param {String} name
   * @param {String} description
   * @param {String|null} index
   */
  addFeature = (name, description, index = null) =>
    this.features.push(new Feature(name, description, index))

  /**
   * Fetches classes to the API.
   *
   * @returns {Object}
   */
  static fetchClasses = () => {
    return useQuery(gql`
      query classes {
        classes {
          index
          name
        }
      }
    `)
  }
}
