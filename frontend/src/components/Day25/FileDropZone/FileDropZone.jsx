import React, { useCallback, useState, useRef } from 'react';
import './FileDropzone.css';

export default function FileDropzone() {
    const [file, setFile] = useState(null);
    const [dragging, setDragging] = useState(false);
    const fileInputRef = useRef(null);

    const onDrop = useCallback((event) => {
        event.preventDefault();
        setDragging(false);
        if (event.dataTransfer.items) {
            if (event.dataTransfer.items[0].kind === 'file') {
                const droppedFile = event.dataTransfer.items[0].getAsFile();
                setFile(droppedFile);
            }
        } else {
            setFile(event.dataTransfer.files[0]);
        }
    }, []);

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDragEnter = () => {
        setDragging(true);
    };

    const onDragLeave = () => {
        setDragging(false);
    };

    const openFilePicker = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div
            className={`dropzone ${dragging ? 'dragging' : ''}`}
            onClick={openFilePicker}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
        >
            {file ? (
                <p>File uploaded: {file.name}</p>
            ) : (
                <p>Drag & drop a file here, or click to select one.</p>
            )}
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={(event) => setFile(event.target.files[0])}
            />
        </div>
    );
}
