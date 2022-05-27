/* passport.js */

export default class Passport {
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
    getFirstName() {
        return this.name.toLowerCase
    }

    getLasttName() {
        return this.name.toUpperCase
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getInitials(initials) {
        return this.firstName[0] + this.lastName[0]
    }

    getIsValidName() {
        // ?
    }
}