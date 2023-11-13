import React from 'react';
import '../Day.css'; // Import your CSS file for styling

const Day35 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 35: Implementing CI/CD for Streamlined Workflows</h2>
                <p>
                    On Day 35, we took a significant leap in our development process by setting up a Continuous Integration/Continuous Deployment pipeline. CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development.
                </p>
                <p>
                    The main concepts of CI/CD are continuous integration, continuous delivery, and continuous deployment. CI/CD is a solution to the problems integrating new code can cause for development and operations teams (AKA "integration hell").
                </p>
                <p>
                    Specifically, we've done the following:
                </p>
                <ol>
                    <li>Integrated GitHub Actions for Continuous Integration, automatically running our test suite on every push and pull request.</li>
                    <li>Configured deployment scripts to automate the deployment process to our hosting platform, such as Heroku or AWS, upon successful tests and merges into the main branch.</li>
                    <li>Set up notifications to alert the team of build statuses and deployment results.</li>
                </ol>
                <p>
                    Here’s a basic example of a GitHub Actions workflow configuration for Node.js that we added to our project:
                </p>
                <pre>
                    <code>
                        {`.github/workflows/node.js.yml

name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js $\{matrix.node-version\}
      uses: actions/setup-node@v1
      with:
        node-version: $\{matrix.node-version\}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
`}
                    </code>
                </pre>
                <p>
                    By integrating these CI/CD practices, we've automated our testing and deployment, which helps us to ship more robust code faster and more efficiently.
                </p>
                <p>
                    Tomorrow, on Day 36, we will delve into monitoring and observability to keep our application's health in check and to ensure uptime.
                </p>
            </section>
        </>
    );
};

export default Day35;
