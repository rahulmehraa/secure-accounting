import React from "react";
import { Router, useRoutes } from "react-router-dom";
import Contact from "../component/Contact";
import Home from "../component/Home";
import Feature from "../component/Feature";
import Pricing from "../component/Pricing";
import Details from "../component/Details";
import About from "../component/About";
import SignUp from "../component/SignUp";
import Login from "../component/Login";

const Routers = () => {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "/feature", element: <Feature /> },
        { path: "/pricing", element: <Pricing /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/gst-billing", element: <Details name1="GST" title1="Billing" img1="assets/img/hero-img.png" img2="assets/img/slider/sec2.png" /> },
        { path: "/inventory-details", element: <Details name2="OUR" title2="Inventory" img3="assets/img/icons/debit-card.png" /> },
        { path: "/purchase-details", element: <Details name3="TRACK" title3="Purchase" img4="assets/img/slider/sec2.png" /> }
    ])
    return element;
}
export default Routers;