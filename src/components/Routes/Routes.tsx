import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Housing from "../../pages/Housing/Housing";
import NoMatch from "../../pages/NotFound/NotFound";
import Layout from "../Shared/Layout/Layout";

const IndexRoutes:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout children={<Home />} />} />
                <Route path="/home" element={<Layout children={<Home />} />} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/housing/:id" element={<Layout><Housing /></Layout>} />
                <Route path="/error" element={<NoMatch />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;