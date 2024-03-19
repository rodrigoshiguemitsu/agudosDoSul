import Cabecalho2 from "../Components/Cabecalho2"
import Carrossel from "../Components/Carrossel"
import Header from "../Components/Header"
import LinksOrgaosPublicos from "../Components/LinksOrgaosPublicos"
import Noticias from "../Components/Noticias"
import Servicos from '../Components/Servicos'


function Home(){
    return(
        <main>
            <Header/>
            <Cabecalho2/>
            <Carrossel/>
            <Servicos/>
            <Noticias/>
            <LinksOrgaosPublicos/>
        </main>
    )
}
export default Home