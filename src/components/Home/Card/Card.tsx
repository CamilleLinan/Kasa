import { FC } from "react";
import './_Card.scss';

interface CardProps {
    id: string;
    title: string;
    cover: string;
}

const Card:FC<CardProps> = ({ id, title, cover }) => {
    return(
        <li key={id} className='housing'>
            <a href={'/housing/' + id}>
                <figure className='housing-figure'>
                    <img src={cover} alt={title}  className='housing-figure-cover'/>
                    <figcaption className='housing-figure-figcaption'>
                        <h2 className='housing-figure-figcaption-title'>{title}</h2>
                    </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default Card;