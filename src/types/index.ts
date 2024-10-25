export interface IBlog {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
}


export interface IProject {
  _id?: string;
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  createdAt?: Date;
  updatedAt?: Date;
  _v?: number;
}

export interface ISkill {
  _id?: string;
  skillName: string;
  skillImage: string;
  createdAt?: Date;
  updatedAt?: Date;
  _v?: number;
}