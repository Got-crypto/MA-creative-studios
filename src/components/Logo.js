import { Link } from 'react-router-dom'
import logo from '../images/business-logo.png'

export default function Logo(){
    return(
        <Link to='/' className="h-full">
            <img src={logo} alt='business logo' className='h-full' />
        </Link>
    )
}