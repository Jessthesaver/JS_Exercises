class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  getName() {
    return `${this.name} ${this.lastname}`;
  }

  async sendData(url) {
    try {
      const paramsString = `fullName=${this.getName()}`;
      const urlQuery = new URL(url);
      let header = new Headers();

      urlQuery.searchParams.append("fullName", this.getName());

      header.append("Accept", "application/json");

      let request = new Request(urlQuery, {
        method: "GET",
        headers: header,
      });
      const response = await fetch(request);
      if (!response.ok) {
        throw { status: response.status, statusText: response.statusText };
      }
      const json = await response.json();
      return json;
    } catch (err) {
      throw new Error(`Error with status: ${err}`);
    }
  }
}

class Medic extends Person {
  constructor(name, lastname, specialty) {
    super(name, lastname);
    this.specialty = specialty;
  }
  getDescription() {
    return `${this.name} ${this.lastname}, ${this.specialty}`;
  }
}

let aby = new Medic("Aby", "Diaz", "Ginecologist");
let jesus = new Person("Jesus", "Carmona");
let listofdata = aby.sendData("https://jsonplaceholder.typicode.com/users");
