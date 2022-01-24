export interface Lesson {
  id: number;
  order: number;
  name: string;
  isFinished: boolean;
  goals: string[];
}

export interface Unit {
  id: number;
  name: string;
  progress: number;
  lessonsCount: number;
  defaultColor: string;
  accentColor: string;
  lessons: Lesson[];
}

export interface RootObject {
  units: Unit[];
}
