import SearchController from '../controller/search.controller';

const searchController = new SearchController();

describe('Tests for search engine - search.controller.ts', () => {

    test('getItems() function should be return array', async() => {

        const varTest = await searchController.getItems({ searchParam : '' });

        expect(varTest).toEqual(
            expect.arrayContaining([])
          )
    
    });

})
