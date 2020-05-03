import Book from "../models/Book";

const booksResolvers = {
  Query: {
    books: async (obj, args, context, info) => {
      const books = await Book.find({ title: "heo" });
      const transformBook = book => {
        return {
          title: book.title,
          author: book.author
        };
      };
      return books.map(book => {
        return transformBook(book), console.log(transformBook(book));
      });
    },
    book: async (obj, args, context, info) => {
      const book = await Book.find({}).exec();
      return book;
    }
  },
  Mutation: {
    addBook: async (obj, args, context, info) => {
      const book = await new Book({
        title: args.book.title,
        author: args.book.author
      }).save();
      return book;
    }
  }
};

export default booksResolvers;
