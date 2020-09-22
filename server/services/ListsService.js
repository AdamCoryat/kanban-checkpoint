import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ListsService {
  async getAll(creatorEmail) {
    return await dbContext.List.find({ creatorEmail }).populate(
      "creator",
      "name picture"
    );
  }

  async getListsByBoardId(boardId) {
    let data = await dbContext.List.find(boardId);
    if (!data) {
      throw new BadRequest("Invalid Id or you do not own this board");
    }
    return data;
  }
  async getById(id, creatorEmail) {
    let data = await await dbContext.List.findOne({ _id: id, creatorEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async create(rawData) {
    let data = await dbContext.List.create(rawData);
    return data;
  }

  async edit(id, creatorEmail, update) {
    let data = await dbContext.List.findOneAndUpdate(
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
    let data = await dbContext.List.findOneAndRemove({
      _id: id,
      creatorEmail,
    });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
  }
}

export const listsService = new ListsService();
