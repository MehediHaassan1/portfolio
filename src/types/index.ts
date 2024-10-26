export interface IBlog {
  _id?: string
  title: string
  content: string
  thumbnail: string;
  category: string
  createdAt?: Date;
  updatedAt?: Date;
  _v?: number;
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