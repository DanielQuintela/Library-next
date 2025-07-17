import { Book } from "./Book";
import { User } from "./User";

export type Rent = {
  id: number;
  book: Book;
  user: User;
  returnDate: Date;
  owner_user: User;
};