import mongoose from "mongoose";
const commitsByIdSchema = mongoose.Schema({
  oid: String,
  message: String,
  author: {
    name: String,
    email: String,
    date: String,
  },
  committer: {
    name: String,
    email: String,
    date: String,
  },
  parents: [
    {
      oid: String,
    },
  ],
});

var CommitsById = mongoose.model("CommitsById", commitsByIdSchema);

export default CommitsById;
