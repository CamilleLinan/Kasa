import { FC } from 'react';
import './DisplayCards.scss';
import housings from '../../../datas/logements.json';
import Card from '../Card/Card';

const DisplayCards:FC = () => {
    return(
        <section className='housings-container'>
            <ul className='housings-list'>
                {housings.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default DisplayCards;