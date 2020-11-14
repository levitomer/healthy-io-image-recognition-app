import React, { useState, useRef } from 'react';

export default function Dot({ initialPosition }) {
    const [position, setPosition] = useState({
        x: initialPosition[0],
        y: initialPosition[1],
    });

    // Use useRef to create the function once and hold a reference to it.
    const handleMouseMove = useRef((e) => {
        console.log([e.clientX, e.clientY]);
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    });

    const handleMouseDown = () => {
        document.addEventListener('mousemove', handleMouseMove.current);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove.current);
    };

    return (
        <circle
            cx={position.x}
            cy={position.y}
            r={0.05}
            className="circle"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        />
    );
}
