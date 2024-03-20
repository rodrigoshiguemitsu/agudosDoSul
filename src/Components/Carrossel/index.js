import {useEffect} from 'react'
import './Carrossel.css'

//Desktop 1800x1200 ... mobile 1040x
import desktop1 from '../../Multimidia/AgudosSul1.jpg'
import mobile1 from '../../Multimidia/AgudosSulMobile1.jpg'

import desktop2 from '../../Multimidia/agudosSul2.jpg'
import mobile2 from '../../Multimidia/agudosSulMobile2.jpg'

import desktop3 from '../../Multimidia/agudosSul3.jpg'
import mobile3 from '../../Multimidia/agudosSulMobile3.jpg'

function Carrossel(){

    useEffect(()=>{
        document.querySelector('.manual-btn')
        let cont = 1

        document.getElementById('radio1').checked = true

        setInterval(()=>{
            proximaImg()
        },4000)

        function proximaImg(){
            cont ++

            if(cont > 3){
                cont = 1
            }
            
            document.getElementById('radio'+cont).checked = true
        }
    })
        


    return(
    
        <section className="slider">

        <div className="slider-content">
            
            <input type="radio" name="btn-radio" id="radio1"/>
            <input type="radio" name="btn-radio" id="radio2"/>
            <input type="radio" name="btn-radio" id="radio3"/>

            <div className="slide-box primeiro">
                <img className="img-desktop" src={desktop1} alt="slide 1"/>
                <img className="img-mobile" src={mobile1} alt="slide 1"/>
            </div>

            <div className="slide-box">
                <img className="img-desktop" src={desktop2} alt="slide 1"/>
                <img className="img-mobile" src={mobile2} alt="slide 1"/>
            </div>

            <div className="slide-box">
                <img className="img-desktop" src={desktop3} alt="slide 1"/>
                <img className="img-mobile" src={mobile3} alt="slide 1"/>
            </div>

            <div className="nav-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
            </div>

            <div className="nav-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
            </div>


        </div>

    </section>
    )
}
    export default Carrossel