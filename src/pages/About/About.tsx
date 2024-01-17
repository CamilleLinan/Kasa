import { FC } from 'react';
import './_About.scss';
import Header from "../../components/Layouts/Header/Header";
import Banner from '../../components/Layouts/Banner/Banner';

import Footer from '../../components/Layouts/Footer/Footer';
import aboutBanner from '../../styles/img/kasa-about-banner.png'

const About:FC = () => {
    return (
        <>
            <Header />
            <Banner
                title=''
                src={aboutBanner} />

            <Footer />
        </>
    )
};

export default About;