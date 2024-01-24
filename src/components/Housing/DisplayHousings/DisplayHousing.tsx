import { FC, useEffect, useState } from 'react';
import './_DisplayHousings.scss';
import { NavLink, useParams } from 'react-router-dom';
import { HousingType } from '../../../types/HousingType';
import HousingService from '../../../services/HousingService';
import Gallery from '../Gallery/Gallery';
import RatingScale from '../RatingScale/RatingScale';

const DisplayHousings:FC = () => {
    const { id } = useParams();
    const [ housingData, setHousingData ] = useState<HousingType>();
    const [ errorMsg, setErrorMsg ] = useState<string>('');

    useEffect(() => {
      const fetchData = async () => {
        try {
            const data = await HousingService.fetchHousingDatas();
            setHousingData(data.find(housing => housing.id === id));
        } catch (error) {
            console.log(error);
            setErrorMsg('Malheureusement, le logement que vous recherchez n\'est plus disponible ou n\'existe pas.');
        }
      };
  
      fetchData();
    }, [id]);

    if (housingData === undefined) { 
        return <section className="error-page">
            <p className="error-page-subtitle">{errorMsg}</p>
            <NavLink title='Accueil' end to='/home' className="error-page-link">Retourner sur la page d'accueil</NavLink> 
        </section>
    }

    return (
        <section key={housingData.id} className='housing-page'>
            <Gallery 
                img={housingData.pictures} 
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

            {/* <article className='housing-page-collapses'>
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
                                <li>• {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article> */}
        </section>
    )
}

export default DisplayHousings;