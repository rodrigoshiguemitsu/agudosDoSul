import {Link} from 'react-router-dom'
import './Servicos.css'

function Servicos(){
    return(
        <section id='Main_Servicos'>
           
                <h2 id='Titulo_Servicos'>Utilidade Pública</h2>
            

            <artigo className='Artigo_Servicos'>
                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/carta-de-servicos-online/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Carta de Serviços Online</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/transparencia/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Portal da Transparência</p></Link>

                <Link className='Link_Artigo_Servicos'to='https://www.agudosdosul.pr.gov.br/licitacoes/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Licitações</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/wp-content/uploads/2023/07/horario-de-onibus.pdf' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Horários dos Ônibus</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/informacoes-referentes-ao-covid-19/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Covid-19</p></Link>
                
            </artigo>

            <artigo className='Artigo_Servicos'>
                
                <Link className='Link_Artigo_Servicos' to='https://leismunicipais.com.br/legislacao-municipal/3153/leis-de-agudos-do-sul' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Legislação Municipal</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/calendario-secretaria-de-saude/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Consultório Movel Cronograma</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agendador.pr.gov.br/index.php/agendador/index' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Agendar Identidade</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.alistamento.eb.mil.br/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Alistamento Militar</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/reurb/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >REURB - Regularização</p></Link>
                
            </artigo>
            <artigo className='Artigo_Servicos'>
                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/coleta-de-lixo/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Coleta de Lixo Cronograma</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/sala-do-empreendedor/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Espaço Cidadão</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.diariomunicipal.com.br/amp/pesquisar' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Diário Oficial dos Municípios</p></Link>

                <Link className='Link_Artigo_Servicos'><p
                className='P_Link_Artigo_Servicos'
                >Plano Diretor Municipal</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/eleicoes-membros-do-conselho-tutelar-de-agudos-do-sul/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Menbros Conselho Tutelar</p></Link>
                
            </artigo>

            <artigo className='Artigo_Servicos'>
            <Link className='Link_Artigo_Servicos'><p
                className='P_Link_Artigo_Servicos'
                ></p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.agudosdosul.pr.gov.br/processo-seletivo-simplificado-003-2022/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Processos Seletivos</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www.cmagudosdosul.pr.gov.br/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Câmara de Vereadores</p></Link>

                <Link className='Link_Artigo_Servicos' to='https://www1.tce.pr.gov.br/' target='_blanck'><p
                className='P_Link_Artigo_Servicos'
                >Tribunal de Contas TCE-PR</p></Link>

                <Link className='Link_Artigo_Servicos'><p
                className='P_Link_Artigo_Servicos'
                ></p></Link>
              
                
            </artigo>

            

            
        </section>
    )
}
export default Servicos