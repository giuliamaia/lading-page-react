import './styles.scss';
import Icon from "@mdi/react";
import { useEffect, useState } from 'react';

interface CardTarget {
    icon: string,
    number: number,
    description: string
}
function CardTarget(props: CardTarget) {
    const [num, setNum] = useState(0);
    const [inter, setInter] = useState<number | undefined>();
    useEffect(() => {
        const newInterval = setInterval(() => {
            setNum(num => num + 1);
        }, 50);
        setInter(newInterval)

        return () => {
            clearInterval(newInterval);
        }
    }, []);

    useEffect(() => {
        if (num === props.number) {
            clearInterval(inter);
        }
    }, [num, inter]);

    return <div className='target'>
        <Icon path={props.icon} className='target__icon' size={2}></Icon>
        <div className='target__info'>
            <h2 className='target__info__number'>{num}</h2>
            <span className='target__info__desc'>{props.description}</span>
        </div>
    </div>
}

export default CardTarget;