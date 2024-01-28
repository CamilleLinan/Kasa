import { FC, useEffect, useRef, useState } from "react";
import './_Gallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

interface GalleryProps {
    pictures: string[];
}

const Gallery:FC<GalleryProps> = ({ pictures }) => {
    const [ slideIdx, setSlideIdx ] = useState(0);
    const slideshowContainerRef = useRef<HTMLDivElement>(null);

    const onNext = () => {
        if (slideIdx === pictures.length - 1) {
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    const onPrev = () => {
        if (slideIdx === 0) {
            setSlideIdx(pictures.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    useEffect(() => {
        const updateTransform = () => {
            if (slideshowContainerRef.current) {
                const slideshowImg = slideshowContainerRef.current.querySelector('img') as HTMLImageElement | null;
                if (slideshowImg) {
                    slideshowContainerRef.current.style.transform = `translateX(-${slideIdx * slideshowImg.width}px)`;
                }
            }
        };

        updateTransform();

        window.addEventListener('resize', updateTransform);

        return () => {
            window.removeEventListener('resize', updateTransform);
        };
    }, [slideIdx, pictures]);

    return (
        <div className='slideshow'>
            <div className='slideshow-container' ref={slideshowContainerRef}>
                {pictures.map((picture, i) => 
                    <img className='slideshow-container-img' alt='banniere-page-logement' src={picture} key={i} />
                )}
            </div>
            
            {pictures.length > 1 && <>
                <div className='slideshow-controls'>
                    <i className='slideshow-controls-chevron' onClick={onPrev}>{angleLeft}</i>
                    <i className='slideshow-controls-chevron' onClick={onNext}>{angleRight}</i>
                </div>
                <div className='slideshow-idx'>{slideIdx + 1} / {pictures.length}</div>
            </>}
        </div>
    )
}

export default Gallery;