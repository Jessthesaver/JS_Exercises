let candidate = {
  name: {
    firstname: "John",
    lastname: "Galt",
    phone: "123-456-7890",
  },
  printName: function () {
    return `${this.name.firstname} ${this.name.lastname}`;
  },
};

let div = document.querySelectorAll("#body .info div");
div[0].textContent = candidate.name.firstname;
div[1].textContent = candidate.printName();
