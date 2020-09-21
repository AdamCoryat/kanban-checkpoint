import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import BoardSchema from "../models/Board";
import ListSchema from "../models/List";
import TaskSchema from "../models/Task";
import CommentSchema from "../models/Comment";
class DbContext {
  Comments = mongoose.model("Comment", CommentSchema);
  Tasks = mongoose.model("Task", TaskSchema);
  Lists = mongoose.model("List", ListSchema);
  Boards = mongoose.model("Board", BoardSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
