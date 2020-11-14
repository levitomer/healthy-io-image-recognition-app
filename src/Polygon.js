import Dot from './Dot';
import Lines from './Lines';

export default function Polygon({ points, width, height }){
    return (
        <svg
            className="Svg"
            viewBox={`0 0 ${height} ${width}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <Lines points={points} />

            {points.map((point, i) => (
                <Dot
                    key={i}
                    initialPosition={point}
                    radius={width}
                />
            ))}
        </svg>
    );
};
