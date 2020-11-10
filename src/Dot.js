const Dot = ({ circleRadius, point }) => {
    return (
        <circle
            cx={point[0]}
            cy={point[1]}
            r={circleRadius}
            className="circle"
        />
    );
};

export default Dot;