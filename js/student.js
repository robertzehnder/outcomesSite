class Student extends Person {
  constructor(cohort,homework) { //homework
    super(name,email,schedule,imgUrl)
    this.cohort = cohort
    this.homework = homework
  }
}
