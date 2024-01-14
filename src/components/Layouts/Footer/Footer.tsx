import { FC } from 'react';
import './Footer.scss';
import logoFooter from '../../../styles/img/kasa-logo-footer.png'

const Footer:FC = () => {
    return(
        <footer className='footer'>
            <img src={logoFooter} alt='logo-kasa' className='footer-logo' />
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;