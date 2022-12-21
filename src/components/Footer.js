import { FACEBOOK, TWITTER, INSTAGRAM, PHONENUMBER, PHYSICALADDRESS, EMAIL } from '../constants/contacts'
import facebookicon from '../images/facebook-icon.png'
import twittericon from '../images/twitter-icon.png'
import instagramicon from '../images/instagram-icon.png'
import FooterHeader from './footer-header'

export default function Footer({handleScroll}){
    return(
        <div className="h-auto relative z-30 w-full bg-[#232323]">
            <div className="w-full h-auto md:h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto w-full">
                    <div className='md:w-1/3 w-5/6 my-8 mx-auto flex flex-col justify-between items-start'>
                        <FooterHeader text={'MA Creative Studio'} />
                        <p className='text-white w-64 py-5 opacity-50 first-letter:uppercase text-lg'>
                            helping your business to get to the top and stay at the top through digital marketing.
                        </p>
                        <FooterHeader text={'Connect with us'} />
                        <div className="flex flex-row pt-5 justify-start items-center">
                            <a href={FACEBOOK} target='_blank' rel='noreferrer'>
                                <img src={facebookicon} alt='facebook icon' className='w-10 h-10'/>
                            </a>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-5/6 my-8 mx-auto flex flex-col justify-between items-start'>
                        <FooterHeader text={'Navigation'} />
                        <div className='py-5'>
                            <p className='text-white  py-2 hover:text-primary cursor-pointer opacity-50 first-letter:uppercase text-lg' onClick={() => handleScroll('about') }>About</p>
                            <p className='text-white  py-2 hover:text-primary cursor-pointer opacity-50 first-letter:uppercase text-lg' onClick={() => handleScroll('services') }>Services</p>
                            <p className='text-white  py-2 hover:text-primary cursor-pointer opacity-50 first-letter:uppercase text-lg' onClick={() => handleScroll('benefits') }>benefits</p>
                            <p className='text-white  py-2 hover:text-primary cursor-pointer opacity-50 first-letter:uppercase text-lg' onClick={() => handleScroll('gallery') }>Gallery</p>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-5/6 my-8 mx-auto flex flex-col justify-between items-start'>
                        <FooterHeader text={'Have a Question?'} />
                        
                        <div className='flex flex-row justify-start items-center'>
                            <svg 
                                className="w-6 h-6 text-primary opacity-50" 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <p className='text-white py-2 opacity-50 ml-5 first-letter:uppercase text-lg'>
                                {PHONENUMBER}
                            </p>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <svg 
                                className="w-6 h-6 text-primary opacity-50" 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <p className='text-white py-2 opacity-50 ml-5 first-letter:uppercase text-lg'>
                                {EMAIL}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-56 w-full max-w-screen-lg mx-auto flex justify-center items-center text-white'>
                    Copyright ©2022 All rights reserved | Developed by <a href='https://github.com/Got-crypto' className='hover:underline text-primary ml-1'>gerrardafk</a>
                </div>
            </div>
        </div>
    )
}