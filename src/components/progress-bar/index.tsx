import "./styles.scss";
import { useEffect, useState } from 'react';


interface ProgressBar {
    title: string
    percent: string
}
function ProgressBar(props: ProgressBar) {
    const [pt, setPt] = useState('0%');

    useEffect(() => {
        setTimeout(() => {
            setPt(props.percent);
        }, 1000);
    }, [props.percent]);

    return <div className="progress-bar">
        <div className="progress-bar__text">
            <h5>{props.title}</h5>
            <h5>{props.percent}</h5>
        </div>
        <div className="progress-bar__bar">
            <div className="progress-bar__bar__progress" style={{ width: pt }}></div>
        </div>
    </div>
}

export default ProgressBar;