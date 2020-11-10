import Dot from './Dot';
import Polygon from './Polygon';

const Svg = ({
    circleRadius,
    points,
    width,
    height,
}) => {
    console.log('points: ', points)
    return (
        <svg
            className="Svg"
            viewBox={`0 0 ${height} ${width}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <Polygon points={points} />

            {points.map((point, i) => (
                <Dot
                    circleRadius={circleRadius}
                    key={i}
                    point={point}
                    radius={width}
                />
            ))}
        </svg>
    );
};

export default Svg;
