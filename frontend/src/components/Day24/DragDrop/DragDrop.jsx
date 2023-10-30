import React, { useState, useRef } from 'react';
import './DragDrop.css';

export default function DragDrop() {
    const [list, setList] = useState([
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
    ]);

    const draggedItem = useRef();

    const handleDragStart = (e, index) => {
        draggedItem.current = index;
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragEnd = () => {
        draggedItem.current = null;
    };

    const handleDragOver = (index) => {
        const draggedOverItem = list[draggedItem.current];

        if (draggedOverItem === list[index]) {
            return;
        }

        const items = list.filter((item) => item !== draggedOverItem);

        items.splice(index, 0, draggedOverItem);

        setList(items);
    };

    return (
        <section className="drag-drop-container">
            {list.map((item, index) => (
                <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragEnd={handleDragEnd}
                    onDragOver={() => handleDragOver(index)}
                    className="draggable-item"
                >
                    {item}
                </div>
            ))}
        </section>
    );
}
