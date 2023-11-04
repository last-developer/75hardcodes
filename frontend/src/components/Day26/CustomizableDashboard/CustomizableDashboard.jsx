import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './CustomizableDashboard.css'
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
const ResponsiveGridLayout = WidthProvider(Responsive);

const initialLayout = [
    { i: 'welcome', x: 0, y: 0, w: 12, h: 5, minW: 2, minH: 2 },
    { i: 'chart', x: 0, y: 1, w: 12, h: 15, minW: 2, minH: 2 },
    { i: 'todo', x: 0, y: 2, w: 12, h: 5, minW: 2, minH: 2 },
    { i: 'calendar', x: 0, y: 3, w: 12, h: 15, minW: 2, minH: 2 },
    { i: 'news', x: 0, y: 4, w: 12, h: 5, minW: 2, minH: 2 },
];

export default function CustomizableDashboard() {
    const [layout, setLayout] = useState(initialLayout);

    const onLayoutChange = (layout) => {
        // Update the layout state when it changes
        setLayout(layout);
    };
    // Dummy data for the sales bar chart
const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  // Dummy data for the calendar line chart
  const calendarData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Events',
        data: [2, 3, 2, 3],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

    const renderWidgetContent = (key) => {
        switch (key) {
          case 'welcome':
            return (
              <div className="welcome-widget">
                <h3>Welcome, User!</h3>
                <p>Here's your personalized dashboard to help you stay organized and informed.</p>
              </div>
            );
            case 'chart':
                return (
                  <div className="chart-widget">
                    <h3>Sales Overview</h3>
                    <Bar data={salesData} />
                  </div>
                );
          case 'todo':
            return (
              <div className="todo-widget">
                <h3>To-do List</h3>
                <ul>
                  <li>Meeting with team at 10 AM</li>
                  <li>Prepare presentation slides</li>
                  <li>Call supplier for updates</li>
                  <li>Check emails</li>
                </ul>
              </div>
            );
            case 'calendar':
                return (
                  <div className="calendar-widget">
                    <h3>Calendar</h3>
                    <Line data={calendarData} />
                  </div>
                );
          case 'news':
            return (
              <div className="news-widget">
                <h3>Latest News</h3>
                <ul>
                  <li>Company shares hit record high</li>
                  <li>New product launch next month</li>
                  <li>CEO to attend global tech conference</li>
                </ul>
              </div>
            );
          default:
            return <div>Widget {key}</div>;
        }
      };
      

    return (
        <section>
            <ResponsiveGridLayout
                className="layout"
                layouts={{ lg: layout }}
                breakpoints={{ lg: 1200 }}
                cols={{ lg: 12 }}
                rowHeight={30}
                onLayoutChange={onLayoutChange}
            >
                {layout.map((widget) => (
                    <div key={widget.i} className="widget">
                        {renderWidgetContent(widget.i)}
                    </div>
                ))}
            </ResponsiveGridLayout>
        </section>
    );
}
