class Teacher extends Employee {
  constructor(id, name, skill,checkin) {
    super(id, name, skill,checkin);
    this.title="Teacher";
    this.teacher=true;
  }

  goTeach() {
    console.log("UR a Teacher ! ");
    return 1;
  }
}
