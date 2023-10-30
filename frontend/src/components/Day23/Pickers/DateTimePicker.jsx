import React, { useState } from 'react';
import './DateTimePicker.css'

export default function DateTimePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10)); // default to today
    const [selectedTime, setSelectedTime] = useState(new Date().toTimeString().substr(0, 5)); // default to current time

    return (
        <section>
            <div className="date-picker-container">
                <label htmlFor="date-picker">Select a Date:</label>
                <input
                    type="date"
                    id="date-picker"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <p>Selected Date: {selectedDate}</p>
            </div>

            <div className="time-picker-container">
                <label htmlFor="time-picker">Select a Time:</label>
                <input
                    type="time"
                    id="time-picker"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                />
                <p>Selected Time:{selectedTime}</p>
            </div>
        </section>
    );
}