import { makeAutoObservable } from "mobx";

export interface Student {
  id: number;
  name: string;
  email: string;
}

class StudentStore {
  students: Student[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setStudents(data: Student[]) {
    this.students = data;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  get allStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }
}

export const studentStore = new StudentStore();
