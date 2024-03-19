

import Imagem1 from '../../Multimidia/igreja_matriz.jpeg'
import './Carrossel.css'

function Carrossel(){
    return(
        <section id='Main_Carrossel'>
            <img id='Img_Carrossel' src={Imagem1} alt='Imagem1'/>
        </section>
    )
}

export default Carrossel