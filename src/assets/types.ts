export interface RootObject {
  units: Unit[];
}

export interface Section {
  title: string;
  body: string;
}

export interface Answer {
  title: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Exam {
  grade: number;
  questions: Question[];
}

export interface Lesson {
  id: number;
  order: number;
  isFinished: boolean;
  defaultColor: string;
  accentColor: string;
  name: string;
  goals: string[];
  sections: Section[];
  exam: Exam;
}

export interface Unit {
  id: number;
  name: string;
  defaultColor: string;
  accentColor: string;
  lessons: Lesson[];
}

export interface RootObject {
  units: Unit[];
}
