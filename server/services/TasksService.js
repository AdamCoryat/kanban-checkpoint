import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class TaskService {
  async getTaskByListId(listId) {
    let data = await dbContext.Task.find(listId);
    if (!data) {
      throw new BadRequest("Invalid Id or you do not own this board");
    }
    return data;
  }
  async getAll(creatorEmail) {
    return await dbContext.Task.find({ creatorEmail }).populate(
      "creator",
      "name picture"
    );
  }

  async getById(id, creatorEmail) {
    let data = await dbContext.Task.findOne({ _id: id, creatorEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async create(rawData) {
    let data = await dbContext.Task.create(rawData);
    return data;
  }

  async edit(id, creatorEmail, update) {
    let data = await dbContext.Task.findOneAndUpdate(
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
    let data = await dbContext.Task.findOneAndRemove({
      _id: id,
      creatorEmail,
    });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
  }
}

export const tasksService = new TaskService();
