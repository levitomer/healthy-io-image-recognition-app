import Edge from './Edge';

export default function Polygon({ points }) {
    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );
    const clientCenter = {
        X: window.innerWidth / 2,
        Y: window.innerHeight / 2,
    };

    const centeredPoints = points.map(([x, y]) => [
        x + clientCenter.X,
        y + clientCenter.Y,
    ]);
    return (
        <svg
            className="Svg"
            preserveAspectRation="none"
            viewBox={`0 0 ${vw} ${vh}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <svg viewBox="0 0 1 1" height="1em" width="1em" y="7em">
                <polygon
                    className="polygon"
                    points={centeredPoints.join(' ')}
                />
            </svg>

            {centeredPoints.map((point, i) => (
                <Edge key={i} initialPosition={point} />
            ))}
        </svg>
    );
}
