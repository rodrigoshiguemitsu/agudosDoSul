import './Noticias.css'

function Noticias(){
    return(
        <section id="Main_Noticias">
            <h2 id='Titulo_Noticias'>Notícias</h2>
            <article id='Artigo_Principal_Noticias'>

            <article className='Artigo_Filho_Noticias'>
                <>
                    <div id='Img_Noticia_destaque1'>

                    </div>
                </>

            </article>
            
            <article className='Artigo_Filho_Noticias'>
            
                <div className='Div_2partes_Noticias'>
                    <div className='Img_Noticia_Destaque2'><p className='Img_Noticias'>Imagem1</p></div>
                    <div className='Img_Noticia_Destaque2'><p className='Img_Noticias'>Imagem2</p></div>
                </div>
                
                <div className='Div_2partes_Noticias'>
                    <div className='Img_Noticia_Destaque2'><p className='Img_Noticias'>Imagem1</p></div>
                    <div className='Img_Noticia_Destaque2'><p className='Img_Noticias'>Imagem2</p></div>
                </div>
            
            </article>
            </article>
        </section>
    )
}
export default Noticias