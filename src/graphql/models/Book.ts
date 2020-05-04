import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId
    },
    title: {
      type: String
    },
    author: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// booksSchema.pre("save", async function(next) {
//   try {
//     next();
//   } catch (err) {
//     next(err);
//   }
//   next();
// });

export default mongoose.model("Book", bookSchema);
