export default function Lines({ points }){
    return <polygon className="polygon" points={points.join(' ')} />;
};
