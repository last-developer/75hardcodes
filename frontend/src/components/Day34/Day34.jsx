import React from 'react';
import '../Day.css'; // Import your CSS file for styling

const Day34 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 34: Automating Tests for a Rock-Solid Application</h2>
                <p>
                    Day 34 has been all about fortifying our application's defenses with automated tests. Testing is a crucial part of the development process, ensuring that each piece of our application not only works as intended on its own but also integrates seamlessly with the whole.
                </p>
                <p>
                    Here's the journey we took to achieve automated testing bliss:
                </p>
                <ul>
                    <li><strong>Unit Testing:</strong> We started with unit tests to validate individual functions and components, using Jest to perform assertions on their behavior.</li>
                    <li><strong>Integration Testing:</strong> We moved on to integration tests to ensure that various parts of the application work together correctly.</li>
                    <li><strong>End-to-End Testing:</strong> We utilized tools like Cypress for end-to-end tests that simulate real user interactions from start to finish.</li>
                </ul>
                <p>
                    With these automated tests in place, we're able to identify and fix issues early, reducing the likelihood of bugs making it into production. This is how we wrote a simple unit test:
                </p>
                <pre>
                    <code>
                        {`// Example unit test with Jest
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});`}
                    </code>
                </pre>
                <p>
                    And here's how we might perform an integration test:
                </p>
                <pre>
                    <code>
                        {`// Example integration test with Supertest and Jest
const request = require('supertest');
const app = require('../app'); // Import express app

describe('GET /api/data', () => {
  it('responds with json', async () => {
    const response = await request(app)
      .get('/api/data')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toEqual(/* Expected data */);
  });
});`}
                    </code>
                </pre>
                <p>
                    Testing is an ongoing process, and as we continue to develop, we'll keep refining our tests to cover more scenarios and edge cases.
                </p>
                <p>
                    Tomorrow on Day 35, we'll look into Continuous Integration/Continuous Deployment (CI/CD) pipelines to streamline our development process and automate our deployment.
                </p>
            </section>
        </>
    );
};

export default Day34;