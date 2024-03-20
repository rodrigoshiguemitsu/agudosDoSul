import ImgCamaraMunicipalAgudosSul from '../../Multimidia/camaraMunicipalAgudosSul.png'
import ImgEstadoParana from '../../Multimidia/estadoParana.png'
import ImgTcu from '../../Multimidia/tcu.png'
import ImgBrasaoAgudosSul from '../../Multimidia/brasaoAgudosSul.png'

import {Link} from 'react-router-dom'
import './LinksOrgaosPublicos.css'

function LinksOrgaosPublicos(){
    return(
        <section id='Main_Orgaos_Publicos'>
            <h2 id='Titulo_Orgaos_Publicos'>Links </h2>
            <article id='Artigo_Links_Orgaos_Publicos'>
                <Link className='Links_Orgaos_Publicos' to='https://www.cmagudosdosul.pr.gov.br/' target='_blanck'><img className='Img_Orgaos_Publicos' src={ImgCamaraMunicipalAgudosSul} alt='img1'/></Link>
                
                <Link className='Links_Orgaos_Publicos' to='https://www.parana.pr.gov.br/' target='_blanck'><img className='Img_Orgaos_Publicos' src={ImgEstadoParana} alt='img2'/></Link>

                <Link className='Links_Orgaos_Publicos' to='https://portal.tcu.gov.br/inicio/' target='_blanck'><img className='Img_Orgaos_Publicos' src={ImgTcu} alt='img3'/></Link>

                <Link className='Links_Orgaos_Publicos' to='/' target='_blanck'><img className='Img_Orgaos_Publicos' src={ImgBrasaoAgudosSul} alt='img4'/></Link>
            </article>
        </section>
    )
}
export default LinksOrgaosPublicos