import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentService {
  async getCommentsByTaskId(taskId) {
    let data = await dbContext.Comment.find(taskId);
    if (!data) {
      throw new BadRequest("Invalid Id or you do not own this board");
    }
    return data;
  }
  async getAll(creatorEmail) {
    return await dbContext.Comment.find({ creatorEmail }).populate(
      "creator",
      "name picture"
    );
  }

  async getById(id, creatorEmail) {
    let data = await dbContext.Comment.findOne({ _id: id, creatorEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async create(rawData) {
    let data = await dbContext.Comment.create(rawData);
    return data;
  }

  async edit(id, creatorEmail, update) {
    let data = await dbContext.Comment.findOneAndUpdate(
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
    let data = await dbContext.Comment.findOneAndRemove({
      _id: id,
      creatorEmail,
    });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
  }
}

export const commentsService = new CommentService();
