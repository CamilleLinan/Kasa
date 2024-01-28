import { FC, useEffect, useState } from 'react';
import './_DisplayHousings.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { HousingType } from '../../../types/HousingType';
import HousingService from '../../../services/HousingService';
import Gallery from '../Gallery/Gallery';
import RatingScale from '../RatingScale/RatingScale';
import Collapse from '../../Shared/Collapse/Collapse';
import Loader from '../../Shared/Loader/Loader';

const DisplayHousings:FC = () => {
    const { id } = useParams();
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const navigate = useNavigate();
    const [ housingData, setHousingData ] = useState<HousingType>();

    useEffect(() => {
      const fetchData = async () => {
        try {
            // const data = await HousingService.fetchHousingDatas();
            // const foundHousing = data.find(housing => housing.id === id);
            // if (foundHousing) {
            //     setHousingData(foundHousing);
            // } else {
            //     navigate('/error');
            // }
            
            setTimeout(async () => {
                const data = await HousingService.fetchHousingDatas();
                const foundHousing = data.find(housing => housing.id === id);

                if (foundHousing) {
                    setIsLoading(false);
                    setHousingData(foundHousing);
                } else {
                    setIsLoading(false);
                    navigate('/error');
                }
            }, 1000);
        } catch (error) {
            console.log(error);
        }
      };
  
      fetchData();
    }, [id, isLoading, navigate]);

    if (isLoading) {
        return <Loader />
    }
    if (!housingData) {
        return null;
    }

    return (
        <section key={housingData.id} className='housing-page'>
            <Gallery 
                pictures={housingData.pictures} 
            />

            <header className='housing-page-header'>
                <article className='housing-page-header-infos'>
                    <h1 className='housing-page-header-infos-title'>{housingData.title}</h1>
                    <h2 className='housing-page-header-infos-subtitle'>{housingData.location}</h2>
                    <div className='housing-page-header-infos-tags'>
                        {housingData.tags.map((tag, i) => (
                            <p key={i} className='housing-page-header-infos-tags-tag'>{tag}</p>
                        ))}
                    </div>
                </article>
            
                <article className='housing-page-header-hoster'>
                    <div className='housing-page-header-hoster-infos'>
                        <p className='housing-page-header-hoster-infos-name'>{housingData.host.name}</p>
                        <img src={housingData.host.picture} alt='host-cover' className='housing-page-header-hoster-infos-img'/>
                    </div>
                    <RatingScale
                        scaleValue={housingData.rating}
                    />
                </article>
            </header>

            <article className='housing-page-collapses'>
                <div className='housing-page-collapses-content'>
                    <Collapse
                        title='Description'
                        content={housingData.description}
                    />
                </div>
                <div className='housing-page-collapses-content'>
                    <Collapse
                        title='Équipements'
                        content={housingData.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>{equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>
        </section>
    )
}

export default DisplayHousings;