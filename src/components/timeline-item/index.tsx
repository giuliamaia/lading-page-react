import './styles.scss';

interface TimelineItem {
    textCard: string,
    numberSection: number,
    title: string,
    desc1: string,
    desc2: string,
    reverse: boolean
}
export default function TimelineItem(props: TimelineItem) {
    return <section className='timeline-item' style={props.reverse ? {flexDirection: 'row-reverse', textAlign: 'right'} : {}}>
        <article className='timeline-item__card'>
            {props.textCard}
        </article>
        <article className='timeline-item__divider'>
            <div className='timeline-item__divider__line'></div>
            <div className='timeline-item__divider__circle'>{props.numberSection}</div>
            <div className='timeline-item__divider__line'></div>
        </article>
        <article className='timeline-item__description'>
            <h3>{props.title}</h3>
            <h6 className='timeline-item__description__1'>{props.desc1}</h6>
            <h6 className='timeline-item__description__2'>{props.desc2}</h6>
        </article>
    </section>
}