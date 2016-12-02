class Student extends Employee {
  constructor(id, name, skill,checkin) {
    super(id, name, skill,checkin);
    this.title="Student";
    this.student=true;
  }

  studentClass() {
    console.log("UR a Student ! ");
    return 1;
  }
}
