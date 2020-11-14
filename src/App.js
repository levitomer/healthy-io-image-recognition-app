import React, { useEffect, useState } from 'react';
import Polygon from './Polygon';
import data from './data.json';
import ImageEditor from './ImageEditor';
import './App.scss';

export default function App() {
    const [points, setPoints] = useState([]);
    const [polygon, setPolygon] = useState({});
    const [image, setImage] = useState(null);

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        const dataset = data.reduce((acc, item) => {
            const { x, y } = item;
            acc.push([x, y]);
            return acc;
        }, []);

        setPoints(dataset);
        setPolygon({
            vertices: data.length,
            size: 100,
            points: dataset,
        });
    }

    return (
        <div className="App-wrapper">
            <ImageEditor onImageUpload={setImage} />
            {image ? (
                <Polygon
                    circleRadius={polygon.circleRadius}
                    points={points}
                    width={polygon.size}
                    height={polygon.size}
                />
            ) : null}
        </div>
    );
}
