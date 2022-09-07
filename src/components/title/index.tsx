import './styles.scss';

interface Title {
    title: string,
    description: string,
    center?: boolean
}
function Title(props: Title) {
    return <div className="title" style={props.center ? { alignItems: 'center' } : {}}>
        <h5>{props.title}</h5>
        <h2>{props.description}</h2>
        <div className="title__line">
            <div className="title__line__part1"></div>
            <div className="title__line__part2"></div>
            <div className="title__line__part3"></div>
        </div>
    </div>
}
export default Title;