import { Document } from "mongoose";

interface IBoardMember extends Document {
  name: string;
  position: string;
  image?: string;
  socialMedia: ISocialMedia;
  deletedAt?: Date;
}

interface ISocialMedia {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedIn: string;
}

export type { IBoardMember };
