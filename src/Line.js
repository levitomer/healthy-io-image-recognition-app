export const Line = ({ point, radius }) => {
    const centerX = radius / 2;
    const centerY = radius / 2;
    return (
        <line
            x1={centerX}
            y1={centerY}
            x2={point[0]}
            y2={point[1]}
            className="App-line"
        />
    );
};
