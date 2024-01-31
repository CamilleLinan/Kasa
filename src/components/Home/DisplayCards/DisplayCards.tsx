import { FC, useEffect, useState } from 'react';
import './_DisplayCards.scss';
import Card from '../Card/Card';
import { HousingType } from '../../../types/HousingType';
import HousingService from '../../../services/HousingService';
import Loader from '../../Shared/Loader/Loader';

const DisplayCards:FC = () => {
    const [ housingDatas, setHousingDatas ] = useState<HousingType[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ errorMsg, setErrorMsg ] = useState<string>('');

    useEffect(() => {
      const fetchData = async () => {
        try {
            const data = await HousingService.fetchHousingData();

            setIsLoading(false);
            setHousingDatas(data);
        } catch (error) {
            console.log(error);
            
            setIsLoading(false);
            setErrorMsg('Une erreur est survenue lors de la récupération des logements, veuillez réessayer plus tard.');
        }
      };
  
      fetchData();
    }, []);

    return(
        <> {isLoading ?
            <Loader />
        : <> 
            {housingDatas.length > 0 ?
                <section className='housings-container'>
                    <ul className='housings-list'>
                        {housingDatas.map(({ id, title, cover }) => (
                            <Card
                                key={id}
                                id={id}
                                title={title}
                                cover={cover}
                            />
                        ))} 
                    </ul> 
                </section>
            : <p className='error-msg'>{errorMsg}</p> }</>
        } </>
    )
}

export default DisplayCards;