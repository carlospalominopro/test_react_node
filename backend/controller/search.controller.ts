import * as express from "express";
import { Op } from "sequelize";
import db from "../models/index";

class SearchController {

  search = async (request: express.Request, response: express.Response) => {
    var items = await this.getItems(request?.body);
    response.send(items);
  };

  getItems = async (data) => {

    var params = {
      where: {
        title: {
          [Op.like]: `%${data?.searchParam}%`,
        },
      },
    };

    var query = await db.Item.findAll(params);
    return query;

  };
}

export default SearchController;
