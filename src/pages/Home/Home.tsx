import './_Home.scss';
import HomeBanner from "../../components/Home/HomeBanner";
import Header from "../../components/Layouts/Header/Header";
import DisplayCards from '../../components/Home/DisplayCards/DisplayCards';
import Footer from '../../components/Layouts/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <DisplayCards />
            <Footer />
        </>
    )
};

export default Home;