import * as catApi from '../src/Api/catApi';
jest.mock('../src/Api/catApi');

it('should mock getTitipanCats', async () => {
  // Mock response for cat API
  jest
    .spyOn(catApi, 'getTitipanCats')
    .mockResolvedValueOnce([{id: '1', name: 'Test Cat'}]);

  // Call the API and verify the result
  const data = await catApi.getTitipanCats();
  expect(data).toEqual([{id: '1', name: 'Test Cat'}]);
});
