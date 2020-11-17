import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Edge({ initialPosition, handlePolygonUpdate, index }) {
    const [edge, setEdge] = useState({
        X: initialPosition[0],
        Y: initialPosition[1],
    });
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = useCallback(
        ({ clientX, clientY }) => {
            if (isDragging) {
                setEdge({
                    X: clientX,
                    Y: clientY,
                });
                handlePolygonUpdate({
                    X: clientX,
                    Y: clientY,
                }, index)
            }
        },
        [isDragging, handlePolygonUpdate, index]
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
            cx={edge.X}
            cy={edge.Y}
            r={0.05}
            className="circle"
            onMouseDown={handleMouseDown}
        />
    );
}

Edge.propTypes = {
    position: PropTypes.shape({
        X: PropTypes.number,
        Y: PropTypes.number,
    }),
};
