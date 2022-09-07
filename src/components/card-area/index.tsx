import './styles.scss';
import Icon from "@mdi/react"

interface CardArea {
    title: string,
    description: string,
    icon: string
}
function CardArea(props: CardArea) {
    return <div className='card'>
        <div className='card__icon'><Icon path={props.icon} title="Icone" size={1} /></div>
        <h3 className='card__title'>{props.title}</h3>
        <h5 className='card__description'>{props.description}</h5>
    </div>
}

export default CardArea;