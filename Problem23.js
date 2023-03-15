class CustomRandom {
  constructor(min, max) {
    this.limit = max - min + 1;
    this.max = max;
    this.min = min;
    this.a = 5;
    this.c = 1;
    this.m = 2 ** Math.ceil(Math.log(this.limit) / Math.log(2));
    this.seed = Math.floor(Math.random() * this.m);
  }

  *generator() {
    for (let i = 0; i < this.m; i++) {
      this.seed = (this.a * this.seed + this.c) % this.m;

      if (this.seed < this.limit) {
        yield this.seed + this.min;
      }
    }
  }
}

const customRand = new CustomRandom(0, 10);
const generator = customRand.generator();
let output = generator.next();

while (!output.done) {
  console.log(output.value);
  output = generator.next();
}
