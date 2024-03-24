import {Link} from 'react-router-dom'
import {FaTiktok, FaInstagram, FaFacebookF, FaHome, FaPhoneVolume} from 'react-icons/fa'
import {TfiEmail} from 'react-icons/tfi'

import LogoMarca from '../../Multimidia/Logo.png'

import './Footer.css'


function Footer(){
    return(
        <footer>
            <section id='Footer_Sessao1'>

            <article id='Artigo_ImgLogo_Sessao1_Footer'>
            <img id='ImgLogo_Footer' src={LogoMarca} alt='LogoMarca'/>
            </article>

            <article id='Artigo_ImgLogo_Sessao2_Footer'>
            <Link className='Links_Footer' to='/'
            ><FaHome/></Link>
            <Link className='Links_Footer' to='https://www.instagram.com/prefeituradeagudosdosul/' target='_blanck'
            ><FaInstagram/></Link>
            <Link className='Links_Footer' to='https://www.facebook.com/prefeituradeagudosdosul' target='_blanck'
            ><FaFacebookF/></Link>
            <Link className='Links_Footer' to='https://www.tiktok.com/@prefsagudos?is_from_webapp=1&sender_device=pc' target='_blanck'
            ><FaTiktok/></Link>
            <br/>
            <Link className='Links_Footer' ><TfiEmail className='Icons_MarginTop'/> gabinete@agudosdosul.pr.gov.br</Link>
            <br/>
            <Link className='Links_Footer' ><FaPhoneVolume className='Icons_MarginTop'/> 41 - 3624-1180</Link>
            </article>
            </section>
            <section id='Sessao2_Footer'>
                <p>Todos os direitos reservados</p>
            </section>
        </footer>
    )
}

export default Footer