import { sectionOne } from './section1.js'
import { sectionTwo } from './section2.js'
import { buttonCreator } from '../../components/button/button.js'


const totalSectionOp = ()=>{

    const title = document.createElement('h1')
    title.textContent="Registro Usuario - Empresa"

    const section1 = sectionOne()
    const section2 = sectionTwo()

    const btn = buttonCreator()
    btn.className='interestButton'
    btn.textContent='Perfiles de interes'
    let modal = document.getElementById("myModal")
    let body = document.getElementsByTagName("body")
    btn.onclick = function(){
      modal.style.display = "block"
      body.style.position = "static"
      body.style.height = "80%"
      body.style.overflow = "hidden"
    }

    const parent = document.createElement('div')
    parent.appendChild(title)
    parent.appendChild(section1)
    parent.appendChild(section2)
    parent.appendChild(btn)
    parent.className="padre"

    return parent

}

export const totalSection = totalSectionOp()