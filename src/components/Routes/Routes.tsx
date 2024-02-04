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
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/housing/:id" element={<Housing />} />
                    <Route path="/error" element={<NoMatch />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;