import * as express from "express";
import { Op } from "sequelize";
import db from "../models/index"

class SearchController {

  search = async(request: express.Request, response: express.Response) => {    
    
    var params = {
        where : {
            title : {
                [Op.like]: `%${request?.body?.searchParam}%`
            }
        }
    };

    var items = await db.Item.findAll(params);   

    response.send(items);

  };

}

export default SearchController;
