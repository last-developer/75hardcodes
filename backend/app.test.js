const server = require('./server'); // Import your Express application
const supertest = require('supertest');
const request = supertest(server);
const mongoose = require('mongoose');

// Unit test for the /api/greet endpoint
describe('GET /api/greet', () => {
    it('should return a greeting message', async () => {
        const response = await request.get('/api/greet');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello, World!');
    });
});

// Integration test for the /api/echo endpoint
describe('POST /api/echo', () => {
    it('should echo the message sent', async () => {
        const message = 'Hello, Tester!';
        const response = await request.post('/api/echo').send({ message });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe(message);
    });
});


// After all tests have run, we close the server and disconnect the database.
afterAll(async () => {
    await mongoose.disconnect();
    server.close();
});