const squareArrow = (x) => x * x;

console.log(squareArrow(3));

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Kosaksi Pasapugazh'));

const user = {
  name: 'Raghuraman',
  cities: ['Morrisville', 'Avenel', 'Pennington'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }

};

const multiplier = {
  numbers: [1, 4, 5, 6, 7, 9, 15, 21],
  multiplyBy: 6,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
console.log(user.printPlacesLived());