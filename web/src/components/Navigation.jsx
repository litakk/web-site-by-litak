import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


import NotFound from "../components/NotFound/index.jsx";

import "../style-css/header.css"

function Navigation() {
    return (
<BrowserRouter>
<div className="header">
                <head-navi>
                    <h1 className="text-one">Website by Litak</h1>
                    <Link to="/" className="none  none-1"> HOME</Link>
                    <Link to="/About" className="none  none-2"> ABOUT</Link>
                    <Link to="/Contact" className="none  none-3"> CONTACT</Link>
                    <Link to="/Signup" className="none  none-4"> SIGN UP</Link>
                </head-navi>
</div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/*" element={<NotFound />} />
                    {/* <Route path="/Signup" element={<Signup />} /> */}
                    {/* <Route path="/LogIn" element={<LogIn />} /> */}
                </Routes>
            </BrowserRouter>
        )
    }

export default Navigation;
