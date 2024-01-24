import { FC } from "react";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import DisplayHousings from "../../components/Housing/DisplayHousings/DisplayHousing";

const Housing:FC = () => {
    return(
        <>
            <Header />
            <DisplayHousings />
            <Footer />
        </>
    )
}

export default Housing;