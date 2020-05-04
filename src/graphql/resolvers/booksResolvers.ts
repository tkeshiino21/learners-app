import Book from "../models/Book";
import BookType from "../schemas/bookScheema";

const booksResolvers = {
  Query: {
    book: async () => {
      const book = await Book.find({}).exec();
      return book;
    }
  },
  Mutation: {
    addBook: async (args: { book: BookType }) => {
      const book = await new Book({
        title: args.book.title,
        author: args.book.author
      }).save();
      return book;
    }
  }
};

export default booksResolvers;
