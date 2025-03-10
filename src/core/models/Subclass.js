import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
export default class Subclass {
  _name
  _characterClass
  _index

  constructor(name, characterClass, index = null) {
    this._name = name
    this._index = index
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

  /**
   * Subclass index
   */

  get index() {
    return this._index
  }

  set index(index) {
    this._index = index
  }

  /**
   * Fetches the subclasses to the API by their name.
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
