import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ListsService {
  async getAll(creatorEmail) {
    return await dbContext.Lists.find({ creatorEmail }).populate(
      "creator",
      "name picture"
    );
  }

  async getById(id, creatorEmail) {
    let data = await dbContext.Lists.findOne({ _id: id, creatorEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async create(rawData) {
    let data = await dbContext.Lists.create(rawData);
    return data;
  }

  async edit(id, creatorEmail, update) {
    let data = await dbContext.Lists.findOneAndUpdate(
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
    let data = await dbContext.Lists.findOneAndRemove({
      _id: id,
      creatorEmail,
    });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
  }
}

export const listsService = new ListsService();
