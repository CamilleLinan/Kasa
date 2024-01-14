import { FC } from 'react';
import Banner from '../Layouts/Banner/Banner';
import homeBanner from '../../styles/img/kasa-home-banner.png'

const HomeBanner:FC = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
    )
}

export default HomeBanner;