import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentService {
  async getAll(creatorEmail) {
    return await dbContext.Comments.find({ creatorEmail }).populate(
      "creator",
      "name picture"
    );
  }

  async getById(id, creatorEmail) {
    let data = await dbContext.Comments.findOne({ _id: id, creatorEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async create(rawData) {
    let data = await dbContext.Comments.create(rawData);
    return data;
  }

  async edit(id, creatorEmail, update) {
    let data = await dbContext.Comments.findOneAndUpdate(
      { _id: id, creatorEmail },
      update,
      { new: true }
    );
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async delete(id, creatorEmail) {
    let data = await dbContext.Comments.findOneAndRemove({
      _id: id,
      creatorEmail,
    });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
  }
}

export const commentService = new CommentService();
