import { FC } from 'react';
import './_Home.scss';
import Banner from '../../components/Shared/Banner/Banner';
import DisplayCards from '../../components/Home/DisplayCards/DisplayCards';
import homeBanner from '../../styles/img/kasa-home-banner.png'

const Home:FC = () => {
    return (
        <>
            <Banner
                title='Chez vous, partout et ailleurs'
                src={homeBanner} />
            <DisplayCards />
        </>
    )
};

export default Home;