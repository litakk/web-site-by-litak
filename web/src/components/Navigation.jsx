import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home";
import About from "./About";

import "../style-css/head-main"

function Navigation() {
    return (
<div className="head-main">
<BrowserRouter>

                <head-navi>
                    <Link to="/"> Home</Link>
                    <Link to="/About"> About</Link>
                    {/* <Link to="/Signup"> Sign up</Link> */}
                </head-navi>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    {/* <Route path="/*" element={<NotFound />} /> */}
                    {/* <Route path="/Signup" element={<Signup />} /> */}
                    {/* <Route path="/LogIn" element={<LogIn />} /> */}

                </Routes>
            </BrowserRouter>
</div>
        )
    }

export default Navigation;
