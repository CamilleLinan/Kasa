import { FC } from 'react';
import './_Home.scss';
import Header from "../../components/Layouts/Header/Header";
import Banner from '../../components/Layouts/Banner/Banner';
import DisplayCards from '../../components/Home/DisplayCards/DisplayCards';
import Footer from '../../components/Layouts/Footer/Footer';
import homeBanner from '../../styles/img/kasa-home-banner.png'

const Home:FC = () => {
    return (
        <>
            <Header />
            <Banner
                title='Chez vous, partout et ailleurs'
                src={homeBanner} />
            <DisplayCards />
            <Footer />
        </>
    )
};

export default Home;