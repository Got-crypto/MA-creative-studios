import { Link } from 'react-router-dom'
import logo from '../images/business-logo.png'

export default function Logo({handleScroll}){
    return(
        <div onClick={()=>handleScroll('home')} className="cursor-pointer h-full">
            <img src={logo} alt='business logo' className='h-full' />
        </div>
    )
}