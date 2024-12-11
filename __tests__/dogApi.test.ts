import * as dogApi from '../src/Api/dogApi';
jest.mock('../src/Api/dogApi');

it('should mock getTitipanDogs', async () => {
  // Mock response for dog API
  jest
    .spyOn(dogApi, 'getTitipanDogs')
    .mockResolvedValueOnce([{id: '1', name: 'Test Dog'}]);

  // Call the API and verify the result
  const data = await dogApi.getTitipanDogs();
  expect(data).toEqual([{id: '1', name: 'Test Dog'}]);
});
