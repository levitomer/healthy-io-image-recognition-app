import React, { useEffect, useState } from 'react';
import Polygon from './Polygon';
import dataset from './data.json';
import ImageEditor from './ImageEditor';
import './App.scss';

export default function App() {
    const [points, setPoints] = useState([]);
    const [image, setImage] = useState(null);
    const clientCenter = {
        X: window.innerWidth / 2,
        Y: window.innerHeight / 2,
    };

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        const points = dataset
            .reduce((acc, item) => {
                const { x, y } = item;
                acc.push([x, y]);
                return acc;
            }, [])
            .map(([X, Y]) => [X + clientCenter.X, Y + clientCenter.Y]);

        setPoints(points);
    }

    return (
        <div className="App-wrapper">
            <ImageEditor onImageUpload={setImage} />
            {image ? <Polygon points={points} /> : null}
        </div>
    );
}
