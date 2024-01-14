import './_Home.scss';
import HomeBanner from "../../components/Home/HomeBanner";
import Header from "../../components/Layouts/Header/Header";
import DisplayCards from '../../components/Home/DisplayCards/DisplayCards';

const Home = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <DisplayCards />
        </>
    )
};

export default Home;