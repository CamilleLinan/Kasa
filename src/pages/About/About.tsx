import { FC } from 'react';
import './_About.scss';
import Header from "../../components/Shared/Header/Header";
import Banner from '../../components/Shared/Banner/Banner';
import Collapse from '../../components/Shared/Collapse/Collapse';
import Footer from '../../components/Shared/Footer/Footer';
import aboutBanner from '../../styles/img/kasa-about-banner.png'

const About:FC = () => {
    return (
        <>
            <Header />
            <Banner
                title=''
                src={aboutBanner} />
            <section className="about">
                <div className="about-collapses">
                    <Collapse
                        title='Fiabilité'
                        content='Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, et toutes les informations 
                        sont régulièrement vérifiées par nos équipes.'
                    />
                </div>
                <div className="about-collapses">
                    <Collapse
                        title='Respect'
                        content='La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage
                        entraînera une exclusion de note plateforme.'
                    />
                </div>
                <div className="about-collapses">
                    <Collapse
                        title='Service'
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une 
                        expérience parfaite. N'hésitez pas à nous contacter si vous avez 
                        la moindre question."
                    />
                </div>
                <div className="about-collapses">
                    <Collapse
                        title='Sécurité'
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                        pour les voyageurs, chaque logement correspond aux critères de sécurité
                        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                        locataire, cela permet à nos équipes de vérifier que les standards sont 
                        bien respectés. Nous organisons également des ateliers sur la sécurité 
                        domestique pour nos hôtes."
                    />
                </div>
            </section>
            <Footer />
        </>
    )
};

export default About;