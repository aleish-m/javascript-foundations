class Magician {
  constructor(magicianInfo) {
    this.name = `The Great ${magicianInfo.name}`;
    this.assistant = magicianInfo.assistant;
    this.favoriteAccessory = magicianInfo.clothing || 'top hat';
    this.confidencePercentage = 10
  }

  performIncantation(spell) {
    return `${spell.toUpperCase()}!`;
  }

  performTrick() {
    if (this.confidencePercentage < 100) {
      this.confidencePercentage += 10
    }
    return `PULL RABBIT FROM ${this.favoriteAccessory.toUpperCase()}`;
  }

  performShowStopper() {
    if(this.confidencePercentage === 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician