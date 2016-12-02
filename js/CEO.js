class CEO extends Employee {
  constructor(id, name, skill,checkin) {
    super(id, name, skill,checkin);
    this.title="CEO";
    this.ceo=true;
  }

  fireEveryOne() {
    console.log("UR Fired ! ");
    return 1;
  }

}
