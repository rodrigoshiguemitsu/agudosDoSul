import './Cabecalho2.css'
import {Link} from 'react-router-dom'
import LogoMarca from '../../Multimidia/Logo.png'
import { useRef, useState } from 'react'



function Cabecalho2(){

    const dropDownRefMunicipio = useRef (null)
    const dropDownRefSecretarias = useRef (null)
    const dropDownRefConselhos = useRef (null)
    const dropDownRefPublicacoes = useRef (null)
    
    const [isActiveMunicipio,setIsActiveMunicipio]=useState(false)
    const onClickMunicipio =()=> setIsActiveMunicipio(!isActiveMunicipio)
    
    const [isActiveSecretarias,setIsActiveSecretarias]=useState(false)
    const onClickSecretarias =()=> setIsActiveSecretarias(!isActiveSecretarias)

    const [isActiveConselhos,setIsActiveConselhos]=useState(false)
    const onClickConselhos =()=> setIsActiveConselhos(!isActiveConselhos)

    const [isActivePublicacoes,setIsActivePublicacoes]=useState(false)
    const onClickPublicacoes =()=> setIsActivePublicacoes(!isActivePublicacoes)
    

    return(
        <section id='Main_Cabecalho2'>
            <article id='Artigo_Image_Cabecalho2'>
                <img id='Image_Cabecalho2' src={LogoMarca} alt='LogoMarca'/>
            </article>

            <article id='Artigo_Navegacao_Cabecalho2'>
                <button onClick={onClickMunicipio} className='Button_Navegacao_Cabecalho2'>
                    <span >MUNICÍPIO</span>
                <nav
                ref={dropDownRefMunicipio}
                className={`menu ${isActiveMunicipio ? 'active' : 'inactive'}`}
                >
                    <ul className='Ul_Cabecalho2'>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/historia/' target='_blanck'><p className='P_Cabecalho2'>História</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Prefeitura</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/simbolos/' target='_blanck'><p className='P_Cabecalho2'>Símbolos</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/feriados-2/' target='_blanck'><p className='P_Cabecalho2'>Feriados</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/galeria-de-fotos-do-municipio/' target='_blanck'><p className='P_Cabecalho2'>Fotos do Município</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/localidades/' target='_blanck'><p className='P_Cabecalho2'>Localidades</p></Link></li>
                        <hr/>
                    </ul>
                </nav>
                </button>

                <button onClick={onClickSecretarias} className='Button_Navegacao_Cabecalho2'>
                    <span >SECRETARIAS</span>
                <nav
                ref={dropDownRefSecretarias}
                className={`menu ${isActiveSecretarias ? 'active' : 'inactive'}`}
                >
                    <ul className='Ul_Cabecalho2'>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/administracao-e-financas/' target='_blanck'><p className='P_Cabecalho2'>Administração e Finanças</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/secretaria-de-agricultura-e-meio-ambiente/' target='_blanck'><p className='P_Cabecalho2'>Agricultura e Meio Ambiente</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/secretaria-de-assistencia-e-promocao-social/' target='_blanck'><p className='P_Cabecalho2'>Assistência e Promoção Social</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Educação e Cultura</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2' to='https://www.agudosdosul.pr.gov.br/esportes/' target='_blanck'><p className='P_Cabecalho2'>Esportes</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Obras e Serviços</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Secretaria de Saúde</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Desenvolvimento Econômico e Turismo</p></Link></li>
                        <hr/>
                    </ul>
                </nav>
                </button>

                <button onClick={onClickConselhos} className='Button_Navegacao_Cabecalho2'>
                    <span >CONSELHOS MUNICIPAIS</span>
                <nav
                ref={dropDownRefConselhos}
                className={`menu ${isActiveConselhos ? 'active' : 'inactive'}`}
                >
                    <ul className='Ul_Cabecalho2'>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Alimentação Escolar - CAE</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Assistência Social</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Desenvolvimento Municipal das Cidades</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Desenvolvimento Rural Sustentável</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Direitos da Criança e do Adolescente</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Direitos da Pessoa com Deficiência</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Direitos do Idoso</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Educação</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Meio Ambiente</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Saúde</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Segurança Alimentar e Nutricional Sustentável</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>COMSEA</p></Link></li>
                        <hr/>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>FUNDEB</p></Link></li>
                        <hr/>
                    </ul>
                </nav>
                </button>

                <button onClick={onClickPublicacoes} className='Button_Navegacao_Cabecalho2'>
                    <span >PUBLICAÇÕES</span>
                <nav
                ref={dropDownRefPublicacoes}
                className={`menu ${isActivePublicacoes ? 'active' : 'inactive'}`}
                >
                    <ul className='Ul_Cabecalho2'>
                    <li><Link className='Li_Cabecalho2'><p>Navegação1</p></Link></li>
                        <li><Link className='Li_Cabecalho2'><p className='P_Cabecalho2'>Navegação2</p></Link></li>
                        <li><Link className='Li_Cabecalho2'><p
                        className='P_Cabecalho2'>Navegação3</p></Link></li>
                        <li><Link className='Li_Cabecalho2'><p
                        className='P_Cabecalho2'>Navegação4</p></Link></li>
                        <li><Link className='Li_Cabecalho2'><p
                        className='P_Cabecalho2'>Navegação5</p></Link></li>
                        
                    </ul>
                </nav>
                </button>

                
                
                <Link className='Button_Navegacao_Cabecalho2' to='https://agudosdosul.1doc.com.br/atendimento' target='_blanck'>ATENDIMENTO AO CIDADÃO</Link>
            </article>
        </section>
    )
}
export default Cabecalho2