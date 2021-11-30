export default class Goblin {
  constructor(gameElement) {
    this.cells = gameElement.querySelectorAll('.col');
    this.goblin = gameElement.querySelector('.goblin');
  }

  change() {
    let previous = 0;
    let rand = 0;

    setInterval(() => {
      while (rand === previous) {
        rand = Math.floor(Math.random() * (this.cells.length - 1));
      }
      previous = rand;
      this.cells[rand].appendChild(this.goblin);
    }, 1000);
  }
}
