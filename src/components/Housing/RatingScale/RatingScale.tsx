import { FC } from 'react';
import './_RatingScale.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />

interface RatingScaleProps {
    scaleValue: string;
}

const RatingScale:FC<RatingScaleProps> = ({ scaleValue }) => {
    const scaleValueAsNum = parseInt(scaleValue, 10);
    const range = [1, 2, 3, 4, 5];

    return (
        <div className='housing-page-ratings'>
            {range.map((rangeElem) =>
                <span key={rangeElem} 
                    className={scaleValueAsNum >= rangeElem ? 'housing-page-ratings-star' 
                    : 'housing-page-ratings-star housing-page-ratings-star-grey'}>
                    {star}
                </span>
            )}
        </div>
    )
}

export default RatingScale;