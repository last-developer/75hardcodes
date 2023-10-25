import React from 'react';
import '../Day.css';

export default function Day16() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 16: Writing Routes in Your React App</h2>
            <p>
                Welcome to Day 16 of our coding journey! Today, we're diving into the exciting world of React Router.
                Routing is a fundamental part of building web applications. It allows you to navigate between different
                pages or views in your app while keeping everything smooth and organized.
            </p>
            <p>
                We'll show you how to create and manage routes in your React app step by step.
            </p>
            <h3>Step 1: Install React Router</h3>
            <p>
                First, you'll need to install React Router if you haven't already. You can do this by running:
            </p>
            <pre>
                <code>npm install react-router-dom</code>
            </pre>
            <br />
            <h3>Step 2: Import and Set Up the BrowserRouter</h3>
            <p>
                In your main application file (usually <code>App.js</code>), you need to import the BrowserRouter component.
                Wrap your entire app with it to enable routing. Here's an example:
            </p>
            <pre>
                <code>{`import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            {/* Your app content */}
        </BrowserRouter>
    );
}`}</code>
            </pre>
            <br />
            <h3>Step 3: Define Routes</h3>
            <p>
                Next, you'll define the routes in your app. You can do this using the <code>Route</code> component from
                React Router. Each <code>Route</code> element specifies a path and the component to render when that path
                is matched.
            </p>
            <pre>
                <code>{`import { Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes here */}
        </BrowserRouter>
    );
}`}</code>
            </pre>
            <br />
            <h3>Step 4: Create Components</h3>
            <p>
                You'll need to create components that correspond to your routes. In the example above, you should have
                components named <code>Home</code> and <code>About</code>.
            </p>
            <h3>Step 5: Link to Routes</h3>
            <p>
                To navigate to different routes, use the <code>Link</code> component from React Router. It allows you to
                create links to your routes.
            </p>
            <pre>
                <code>{`import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* Add more links here */}
            </ul>
        </nav>
    );
}`}</code>
            </pre>
            <p>
                These are the basic steps to set up routing in your React app. You can expand on this foundation to create
                a more complex navigation structure. Explore the React Router documentation to unlock more possibilities.
            </p>
        </section>
    );
}
