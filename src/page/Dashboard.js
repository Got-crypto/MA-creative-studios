import { useState } from "react";
import About from "../components/Gallery";
import Benefits from "../components/Benefits";
import DropdownNav from "../components/DropDownNav";
import Footer from "../components/Footer";
import Goal from "../components/Goal";
import Header from "../components/Header";
import HeroSection from "../components/Hero-Section";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Services from "../components/Services";
import StickyNav from "../components/StickyNav";
import Gallery from "../components/Gallery";
import ImageOverlay from "../components/ImageOverlay";

export default function Dashboard(){

    const [navOpen, setNavOpen] = useState(false)

    const handleNavOpen = ()=> {
        setNavOpen(!navOpen)
    }

    const [about, setAbout] = useState()
    const [services, setServices] = useState()
    const [benefits, setBenefits] = useState()
    const [gallery, setGallery] = useState()
    const [newsletter, setNewsletter] = useState()
    const [home, setHome] = useState()
    const [selectedImage, setSelectedImage] = useState()

    console.log('about', about)

    const handleScroll = location => {

        switch (location) {
            case 'about':
                about.scrollIntoView()
                break;
            
            case 'services':
                services.scrollIntoView()
                break

            case 'benefits':
                benefits.scrollIntoView()
                break

            case 'gallery':
                gallery.scrollIntoView()
                break

            case 'newsletter':
                newsletter.scrollIntoView()
                break
            
            case 'home':
                home.scrollIntoView()
                break

            default:
                break;
        }

    }

    const handleImageOverlay = selectedImage => {
        setSelectedImage(selectedImage)
    }

    return(
        <>
            <ImageOverlay setSelectedImage={setSelectedImage} selectedImage={selectedImage} />
            <Header />
            <Navbar handleNavOpen={handleNavOpen} handleScroll={handleScroll} />
            <DropdownNav handleScroll={handleScroll} handleNavOpen={handleNavOpen} navOpen={navOpen} setNavOpen={setNavOpen}/>
            <StickyNav handleScroll={handleScroll}/>
            <HeroSection handleScroll={handleScroll} setHome={setHome} />
            <Goal handleScroll={handleScroll} setAbout={setAbout} />
            <Services setServices={setServices} />
            <Newsletter handleScroll={handleScroll} setNewsletter={setNewsletter} />
            <Benefits setBenefits={setBenefits} />
            <Gallery setGallery={setGallery} handleImageOverlay={handleImageOverlay} />
            <Footer handleScroll={handleScroll}/>
        </>
    )
}