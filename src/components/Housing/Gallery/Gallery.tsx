import { FC, useState } from "react";
import './_Gallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

interface GalleryProps {
    img: string[];
}

const Gallery:FC<GalleryProps> = ({ img }) => {
    const [ slideIdx, setSlideIdx ] = useState(0);

    const imgSize = () => {
        const slideshowImg = document.querySelector('.slideshow-container img') as HTMLImageElement | null;
        if (!slideshowImg) {
            return 0;
        }
        return slideshowImg.width;
    }

    const onNext = () => {
        if (slideIdx === img.length - 1) {
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    const onPrev = () => {
        if (slideIdx === 0) {
            setSlideIdx(img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    return (
        <div className='slideshow'>
            <div className='slideshow-container' style={{transform: `translateX(-${slideIdx * imgSize()}px)`}}>
                {img.map((picture, i) => 
                    <img className='slideshow-container-img' alt='banniere-page-logement' src={picture} key={i} />
                )}
            </div>
            
            {img.length > 1 && <>
                <div className='slideshow-controls'>
                    <i className='slideshow-controls-chevron' onClick={onPrev}>{angleLeft}</i>
                    <i className='slideshow-controls-chevron' onClick={onNext}>{angleRight}</i>
                </div>
                <div className='slideshow-idx'>{slideIdx + 1} / {img.length}</div>
            </>}
        </div>
    )
}

export default Gallery;