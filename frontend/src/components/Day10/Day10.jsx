import React, { useState } from 'react';
import axios from 'axios';
import { handleApiError, handleApiSuccess } from '../../reactToastiify';
import './Day10.css'

export default function Day10() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/api/user/checkInput', { value: inputValue })
            .then((response) => {
                const successMessage = response.data.message;
                handleApiSuccess(successMessage);
            })
            .catch((error) => {
                handleApiError(error);
            });
    };

    return (
        <>
            <section className="day-container">
                <h1>Day 10: API Notifications</h1>
                <p>Enter a value (1 for success, anything else for error):</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        required
                    />
                    <button type="submit" className='globalbtn'>Submit</button>
                </form>
                <br />
                <p>
                    Today, we're taking a crucial step to improve user experience by implementing notification handling in our whole web application. Here are the steps to set up notifications in your app:
                </p>

                <h3>Step 1: Set Up `react-toastify` Functionality</h3>
                <p>
                    To handle API notifications, we create a file named `reactToastify.js` in our `src` folder. In this file, we import `toast` from 'react-toastify' and create two essential functions:
                </p>
                <ul>
                    <li>
                        HandleApiError(error): This function manages API error notifications, extracting the error message from the API response or showing a default error message.
                    </li>
                    <li>
                        HandleApiSuccess(message): This function handles success notifications, displaying a success message to the user.
                    </li>
                </ul>

                <h3>Step 2: Integrate `react-toastify` in Your App</h3>
                <p>
                    In the main component of your app (for example, `app.jsx`), add the following code to integrate `react-toastify`:
                </p>
                <pre style={{ marginTop: "-1.5rem" }}>
                    {`
<ToastContainer theme="dark" position="top-right" autoClose={3000} />
import 'react-toastify/dist/ReactToastify.css';
`}
                </pre>
                <br />
                <h3>Step 3: Use `react-toastify` in API Calls</h3>
                <p>
                    Whenever you make an API call, include the following code in the `.then()` and `.catch()` blocks to display notifications based on the API response:
                </p>
                <pre style={{ marginTop: "-1.5rem" }}>
                    {`
axios.post('http://localhost:3000/api/user/checkInput', { value: inputValue })
    .then((response) => {
        const successMessage = response.data.message;
        handleApiSuccess(successMessage);
    })
    .catch((error) => {
        handleApiError(error);
    });
`}
                </pre>
                <br />
                <h3>Step 4: Define API Controllers</h3>
                <p>
                    In your API controllers (for example, `userController.js`), structure your response data as follows:
                </p>
                <pre style={{ marginTop: "-1.5rem" }}>
                    {`
exports.checkInput = (req, res) => {
    const { value } = req.body;

    if (value === '1') {
        res.status(200).json({ message: 'Success! Input is 1' });
    } else {
        res.status(400).json({ error: 'Error: Input is not 1' });
    }
}
`}
                </pre>
                <br />
                By following these steps, you can easily incorporate `react-toastify` into any component to show success and error notifications in your web application. This approach enhances user feedback and makes your application more informative.
            </section>
        </>
    );
};