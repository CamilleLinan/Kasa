import { FC, useEffect, useState } from 'react';
import './_About.scss';
import Header from "../../components/Shared/Header/Header";
import Banner from '../../components/Shared/Banner/Banner';
import Collapse from '../../components/Shared/Collapse/Collapse';
import Footer from '../../components/Shared/Footer/Footer';
import aboutBanner from '../../styles/img/kasa-about-banner.png'
import AboutContentService from '../../services/AboutContentService';
import { AboutContentType } from '../../types/AboutContentType'; 

const About:FC = () => {
    const [ aboutContents, setAboutContents ] = useState<AboutContentType[]>([]);
    const [ errorMsg, setErrorMsg ] = useState<string>('');

    useEffect(() => {
      const fetchData = async () => {
        try {
            const data = await AboutContentService.fetchAboutContents();
            setAboutContents(data);
        } catch (error) {
            console.log(error);
            setErrorMsg('Une erreur est survenue, veuillez réessayer plus tard.');
        }
      };
  
      fetchData();
    }, []);

    return (
        <>
            <Header />
            <Banner
                title=''
                src={aboutBanner} 
            />
            <section className="about">
                {aboutContents.length > 0 ? <>
                    {aboutContents.map((aboutContent, i) => (
                        <div className="about-collapses" key={i}>
                            <Collapse
                                title={aboutContent.title}
                                content={aboutContent.content}
                            />
                        </div>
                    ))} </>
                : <p className='about-error'>{errorMsg}</p>}
            </section>
            <Footer />
        </>
    )
};

export default About;