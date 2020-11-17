import React, { useState } from 'react';
import Edge from './Edge';

export default function Polygon({ points }) {
    const [polygon, setPolygon] = useState(points);

    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );

    function handlePolygonUpdate(edge, index) {
        const [X, Y] = polygon[index];
        if (X !== edge.X || Y !== edge.Y) {
            setPolygon((polygon) =>
                polygon.map((point, i) => {
                    if (i === index) {
                        return [edge.X, edge.Y];
                    } else {
                        return point;
                    }
                })
            );
        }
    }

    return (
        <svg
            className="Svg"
            preserveAspectRatio="none"
            viewBox={`0 0 ${vw} ${vh}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon className="polygon" points={polygon.join(' ')} />

            {polygon.map((point, i) => (
                <Edge
                    key={i}
                    index={i}
                    handlePolygonUpdate={handlePolygonUpdate}
                    initialPosition={point}
                />
            ))}
        </svg>
    );
}
