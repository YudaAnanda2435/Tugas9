import * as rabbitApi from '../src/Api/rabbitApi';
jest.mock('../src/Api/rabbitApi');

it('should mock getTitipanRabbits', async () => {
  // Mock response for rabbit API
  jest
    .spyOn(rabbitApi, 'getTitipanRabbits')
    .mockResolvedValueOnce([{id: '1', name: 'Test Rabbit'}]);

  // Call the API and verify the result
  const data = await rabbitApi.getTitipanRabbits();
  expect(data).toEqual([{id: '1', name: 'Test Rabbit'}]);
});
