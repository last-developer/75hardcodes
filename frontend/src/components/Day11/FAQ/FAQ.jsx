import React, { useState } from 'react';
import './FAQ.css'

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
            question: 'How do I get started with React?',
            answer: 'You can start by creating a new React app using "create-react-app" or by setting up a custom development environment.',
        },
        {
            question: 'What are components in React?',
            answer: 'Components are the building blocks of a React application. They are reusable, self-contained pieces of UI.',
        },
        {
            question: 'How can I pass data between components?',
            answer: 'Data can be passed between components through props. You can also use state management libraries like Redux or React Context API.',
        },
        {
            question: 'What is JSX?',
            answer: 'JSX is a syntax extension for JavaScript often used with React. It allows you to write HTML-like code in your JavaScript files.',
        },
    ]);

    return (
        <section className="faq-container">
            <h2>FAQ (Frequently Asked Questions)</h2>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <details>
                            <summary>{faq.question}</summary>
                            <p>{faq.answer}</p>
                        </details>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FAQ;