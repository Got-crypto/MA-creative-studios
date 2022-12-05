import { useState } from "react";
import About from "../components/About";
import DropdownNav from "../components/DropDownNav";
import Footer from "../components/Footer";
import Goal from "../components/Goal";
import Header from "../components/Header";
import HeroSection from "../components/Hero-Section";
import Navbar from "../components/Navbar";

export default function Dashboard(){

    const [navOpen, setNavOpen] = useState(false)

    const handleNavOpen = ()=> {
        setNavOpen(!navOpen)
    }

    return(
        <>
            <Header />
            <Navbar handleNavOpen={handleNavOpen} />
            <DropdownNav handleNavOpen={handleNavOpen} navOpen={navOpen} setNavOpen={setNavOpen}/>
            <HeroSection />
            <Goal />
            <Footer />
        </>
    )
}