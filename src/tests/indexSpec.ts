import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

const testUrl = '/resize?filename=fjord.jpg&width=200&height=200';
describe('Test the app endpoint', () => {
  it('checks the api response', async () => {
    const response = await request.get(testUrl);
    expect(response.status).toBe(200);
  });
});
