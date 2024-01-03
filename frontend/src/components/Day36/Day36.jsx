import React from 'react';
import '../Day.css'; // Ensure the path to your CSS file is correct

const Day36 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 36: Monitoring and Observability in Application Health</h2>
                <p>
                    Today's journey, Day 36, was all about instilling a sense of reliability and trust in our application by integrating monitoring and observability tools.
                </p>
                <p>
                    Monitoring and observability are key to understanding our system's performance in real-time and ensuring that we can quickly respond to any issues that arise. Here's how we enhanced our app's self-awareness:
                </p>
                <ul>
                    <li><strong>Monitoring:</strong> We set up a monitoring system using tools like Prometheus and Grafana to keep track of our application's operational metrics.</li>
                    <li><strong>Logs Management:</strong> We leveraged centralized logging with Elasticsearch, Logstash, and Kibana (the ELK stack) to aggregate and analyze logs.</li>
                    <li><strong>Error Tracking:</strong> We implemented error tracking with services like Sentry to capture real-time errors and exceptions.</li>
                    <li><strong>Health Checks:</strong> We added health check endpoints to our application to provide immediate insights into its status.</li>
                </ul>
                <p>
                    With these new abilities, our application can not only alert us to problems but also give us the data we need to diagnose and address issues before they affect our users.
                </p>
                <p>
                    Here’s an example of a simple health check endpoint we added to our Express app:
                </p>
                <pre>
                    <code>
                        {`app.get('/health', (req, res) => {
  res.status(200).json({ status: 'up', timestamp: Date.now() });
});`}
                    </code>
                </pre>
                <p>
                    This endpoint can now be monitored externally to ensure our service is healthy and operational.
                </p>
                <p>
                    As we continue to develop and maintain our application, these tools will be invaluable for providing the visibility we need into its behavior and performance.
                </p>
            </section>
        </>
    );
};

export default Day36;