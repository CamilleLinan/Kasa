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
            // const data = await HousingService.fetchHousingDatas();
            // setHousingDatas(data);

            setTimeout(async () => {
                const data = await HousingService.fetchHousingDatas();

                setIsLoading(false);
                setHousingDatas(data);
            }, 1000);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setErrorMsg('Une erreur est survenue, veuillez réessayer plus tard.');
        }
      };
  
      fetchData();
    }, []);

    return(
        <> {isLoading ?
            <Loader />
        :
            <section className='housings-container'>
                {housingDatas.length > 0 ? <>
                    <ul className='housings-list'>
                        {housingDatas.map(({ id, title, cover }) => (
                            <Card
                                key={id}
                                id={id}
                                title={title}
                                cover={cover}
                            />
                        ))} 
                    </ul> </>
                : <p>{errorMsg}</p> }
            </section>
        } </>
    )
}

export default DisplayCards;