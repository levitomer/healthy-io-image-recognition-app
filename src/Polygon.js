import * as styles from './App.scss';

const Polygon = ({ points, width }) => {
    return <polygon className="polygon" points={points.join(' ')} />;
};

export default Polygon;
