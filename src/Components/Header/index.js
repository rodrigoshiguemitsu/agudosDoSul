import './Header.css'
import {Link} from 'react-router-dom'
import {FaTiktok, FaInstagram, FaFacebookF, FaHome, FaPhoneVolume} from 'react-icons/fa'
import {TfiEmail} from 'react-icons/tfi'
function Header(){
    return(
        <header id='Main_Header'>
            <article id='Artigo1_Header'>
            <Link className='Icons_Artigo1_Header'
            to='/'
            ><FaHome/></Link>
            <Link className='Icons_Artigo1_Header'
            to='https://www.instagram.com/prefeituradeagudosdosul/' target='_blanck'
            ><FaInstagram/></Link>
            <Link className='Icons_Artigo1_Header'
            to='https://www.facebook.com/prefeituradeagudosdosul' target='_blanck'
            ><FaFacebookF/></Link>
            <Link className='Icons_Artigo1_Header'
            to='https://www.tiktok.com/@prefsagudos?is_from_webapp=1&sender_device=pc' target='_blanck'
            ><FaTiktok/></Link>
            </article>
            
            <article id='Artigo2_Header'>
            <Link className='Icons_Artigo2_Header'><TfiEmail/> gabinete@agudosdosul.pr.gov.br</Link>
            <Link className='Icons_Artigo2_Header'><FaPhoneVolume/> (41) 3624-1180</Link>
            </article>
        </header>
    )
}
export default Header