import Benefit from "./Benefit";

export default function Benefits({setBenefits}){

    const benefits = document.getElementById('benefits')

    setBenefits(benefits)

    return (
        <div className="h-auto py-24 w-full relative z-30 bg-white" id="benefits">
            <div className="h-auto w-full max-w-screen-xl flex font-regular flex-col justify-center items-center mx-auto ">
                <h1 className="text-3xl">
                    What do you <span className="text-primary font-bold">Benefit</span> by hiring us
                </h1>
                <div className="h-auto py-10 w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 justify-center items-center">
                    <Benefit reverse={!1} mock={'engineer'} text={"We provide cost effective and quality advertisements designed to have an appealing effect on all your types of customers."} />
                    <Benefit reverse={!1} mock={'revenue'} text={"We give our clients the potential to attain higher revenues"} />
                    <Benefit reverse={!1} mock={'handshake'} text={"We offer all these services all in one monthly subscription of which subscription fee and payment methods are negotiable and mutually favorable."} />
                    <Benefit reverse={!1} mock={'relationship'} text={"We help find customer relationship, retainment, and Incremental Brand loyalty"} />
                    <Benefit reverse={!1} mock={'brand'} text={"We increase our clients Brand value"} />
                </div>
            </div>
        </div>
    )
}