import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Edge({ initialPosition }) {
    const [position, setPosition] = useState({
        x: initialPosition[0],
        y: initialPosition[1],
    });
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = useCallback(
        ({ clientX, clientY }) => {
            if (isDragging) {
                setPosition({
                    x: clientX,
                    y: clientY,
                });
            }
        },
        [isDragging]
    );

    const handleMouseUp = useCallback(() => {
        if (isDragging) {
            setIsDragging(false);
        }
    }, [isDragging]);

    const handleMouseDown = useCallback(() => {
        setIsDragging(true);
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <circle
            fill="black"
            cx={position.x}
            cy={position.y}
            r={0.05}
            className="circle"
            onMouseDown={handleMouseDown}
        />
    );
}

Edge.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
};
