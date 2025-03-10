import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import Subclass from './Subclass'
import Feature from './Feature'

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

    this._subclass = null
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

  get subclasses() {
    return this._subclasses
  }

  set subclass(subclass) {
    if (!(subclass instanceof Subclass))
      throw new Error('The subclass must be an instance of Subclass')

    this._subclass = subclass
  }

  /**
   * Adds an instance of a subclass to this class.
   *
   * @param {String} name
   * @param {String|null} index
   */
  setSubclass = (name, index = null) => (this.subclass = new Subclass(name, index))

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
   * Fetches classes to the API by their name.
   *
   * @param {String} name
   * @returns
   */
  static fetchClasses = (name) => {
    return useQuery(
      gql`
        query classes($name: String) {
          classes(name: $name) {
            index
            name
          }
        }
      `,
      {
        name,
      },
    )
  }
}
