import { FC } from "react";
import './_Card.scss';

interface CardProps {
    id: string;
    title: string;
    cover: string;
}

const Card: FC<CardProps> = (props) => {
    return(
        <li key={props.id} className='housing'>
            <a href={'/housing/' + props.id}>
                <figure className='housing-figure'>
                    <img src={props.cover} alt={props.title}  className='housing-figure-cover'/>
                    <figcaption className='housing-figure-figcaption'>
                        <h2 className='housing-figure-figcaption-title'>{props.title}</h2>
                    </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default Card;