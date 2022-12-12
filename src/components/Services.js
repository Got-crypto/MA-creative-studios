import content from '../images/content-creation.png'
import smm from '../images/smm.png'
import ads from '../images/digital-advert.png'
import design from '../images/media-design.png'
import Service from './service'

export default function Services({setServices}){

    const services = document.getElementById('services')

    setServices(services)

    return (
        <div id='services' className="h-auto py-14 w-full bg-white relative z-30 font-regular">
            <div className="w-full h-full max-w-screen-lg mx-auto flex flex-col justify-center items-center">
                <div className="text-3xl font-bold">
                    Our <span className="text-primary">Services</span>
                </div>
                <div className="w-full mt-10 h-auto grid grid-cols-1 gap-24 md:grid-cols-2 justify-center items-center">
                    <Service header={'Content Creation'} icon={content} text={"This service simply supplies high quality content that's not only visually appealing but is client oriented, purposed for all your online marketing campaigns."} />
                    <Service header={'Online Advertising '} icon={ads} text={"This service allows your brand to have adverts availably, effectively and consistently running on the internet thus promoting your business to greater heights."} />
                    <Service header={'Social Media Marketing'} icon={smm} text={"Social media marketing deals with the communication of your brand to customers via the web through social media platforms such as Facebook, Instagram, Twitter, Linked In etc. This area of marketing includes features such as DMing (Direct messaging) potential clients persuasively to secure sales, forming relationships between clients and your brand, Improving brand identity and visibility and many more."} />
                    <Service header={'Graphic Designing & Web Development'} icon={design} text={"Let us solidify your online presence, lets upload your business on to the great vast ocean of websites we constantly surf on, an ocean called the internet. This service not only builds your brand a legitimate website but at the same time backs you with the branding assets you need such as logo design, unique photographic and videographic content that beautifully represents your brand online."} />
                </div>
            </div>
        </div>
    )
}