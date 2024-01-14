import { FC } from "react";
import './Card.scss';

interface CardProps {
    id: string;
    title: string;
    cover: string;
}

const Card: FC<CardProps> = (props) => {
    return(
        <li key={props.id} className='housing'>
            <a href={'/housing/' + props.id}>
                <figure className='housing_figure'>
                    <img src={props.cover} alt={props.title}  className='housing_figure_cover'/>
                    <figcaption className='housing_figure_figcaption'>
                        <h2 className='housing_figure_figcaption_title'>{props.title}</h2>
                    </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default Card;