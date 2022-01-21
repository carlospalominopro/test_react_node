
import httpCommon from "../http-common";

const getAllItems = (data : any) => {
  return httpCommon.post<Array<any>>("/search", data);
};

const SearchService = {
  getAllItems
};

export default SearchService;