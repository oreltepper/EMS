class Developer extends Employee {
  constructor(id, name, skill,checkin) {
    super(id, name, skill,checkin);
    this.title="Developer";
    this.developer=true;
  }

  developerProg() {
    console.log("UR a program ! ")
    return 1;
  }
}
