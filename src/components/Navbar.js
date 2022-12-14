import Logo from "./Logo";

export default function Navbar({handleNavOpen, handleScroll}){
    return(
        <div className="absolute z-20 h-16 mt-14 w-full">
            <div className="relative z-20 h-full w-full">
                <div className="absolute z-20 opacity-30 h-full w-full" />
                <div className="h-full w-full z-20 relative text-white flex flex-row max-w-screen-lg mx-auto px-10 justify-between items-center">
                        <Logo />
                    <div className="md:flex hidden h-full flex-row justify-end w-full items-center">
                        <p onClick={() => handleScroll('about') } className="text-xl mx-2 hover:underline cursor-pointer">About</p>
                        <p onClick={() => handleScroll('services') } className="text-xl mx-2 hover:underline cursor-pointer">Services</p>
                        <p onClick={() => handleScroll('benefits') } className="text-xl mx-2 hover:underline cursor-pointer">Benefits</p>
                        <p onClick={() => handleScroll('gallery') } className="text-xl mx-2 hover:underline cursor-pointer">Gallery</p>
                    </div>
                    <div className="md:hidden flex h-full flex-row justify-end w-full items-center">
                        <svg
                            onClick={handleNavOpen}
                            className="w-12 h-12 cursor-pointer"
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}