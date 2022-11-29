import facebook from '../images/facebook-icon.png'
import twitter from '../images/twitter-icon.png'
import instagram from '../images/instagram-icon.png'
import * as CONTACTS from '../constants/contacts'

export default function Header(){
    return(
        <div className="absolute z-20 h-6 w-full">
            <div className="relative z-20 h-full w-full">
                <div className="bg-[#232323] absolute z-20 opacity-30 h-full w-full" />
                <div className="h-full w-full z-20 relative text-white flex flex-row max-w-screen-lg mx-auto px-10 justify-between items-center">
                    <div className="flex h-full justify-center items-center">
                        <svg 
                            className="w-4 h-4" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <p className='text-sm'>
                            {CONTACTS.EMAIL}
                        </p>
                    </div>
                    <div className="flex h-full justify-center items-center">
                        <a href={CONTACTS.FACEBOOK} target='_blank' rel='noreferrer' className='w-4 h-4 mx-2'>
                            <img className='w-full h-full' src={facebook} alt='facebook' />
                        </a>
                        <a href={CONTACTS.TWITTER} target='_blank' rel='noreferrer' className='w-4 h-4 mx-2'>
                            <img className='w-full h-full' src={twitter} alt='twitter' />
                        </a>
                        <a href={CONTACTS.INSTAGRAM} target='_blank' rel='noreferrer' className='w-4 h-4 mx-2'>
                            <img className='w-full h-full' src={instagram} alt='instagram' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}