import { useState } from "react";
import DropdownNav from "../components/DropDownNav";
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
        </>
    )
}