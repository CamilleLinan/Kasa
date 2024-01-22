import { FC, useEffect, useState } from 'react';
import './_DisplayCards.scss';
import Card from '../Card/Card';
import { HousingType } from '../../../types/HousingType';
import HousingService from '../../../services/HousingService';

const DisplayCards:FC = () => {
    const [ housingDatas, setHousingDatas ] = useState<HousingType[]>([]);
    const [ errorMsg, setErrorMsg ] = useState<string>('');

    useEffect(() => {
      const fetchData = async () => {
        try {
            const data = await HousingService.fetchHousingDatas();
            setHousingDatas(data);
        } catch (error) {
            console.log(error);
            setErrorMsg('Une erreur est survenue, veuillez réessayer plus tard.');
        }
      };
  
      fetchData();
    }, []);

    return(
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
    )
}

export default DisplayCards;