import { Book } from "./Book";
import { User } from "./User";

interface Rent {
    id          : number;
    book_id     : Book;
    user_id     : User;
    rentDate    : Date;
    returnDate  : Date;
}