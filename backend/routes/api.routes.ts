import { Router } from 'express';
import SearchController from '../controller/search.controller';

const routes = Router();

var searchController = new SearchController();

routes.post('/search', searchController.search);

export default routes;