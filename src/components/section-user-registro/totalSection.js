import { encaCreator } from './encabezado.js'
import { sectionOne } from './section1.js'
import { sectionTwo } from './section2.js'
import { buttonCreator } from '../../components/button/button.js'


const totalSectionOp = ()=>{

    const encabezado = encaCreator('Registor Usuario - Empresa', '"https://imgs.search.brave.com/hQBL65WnYaChAtTTIu4r_QOAL9VGa0eDLnOb4wAYvH4/rs:fit:840:562:1/g:ce/aHR0cHM6Ly93d3cu/cGlrcG5nLmNvbS9w/bmdsL20vNTIxLTUy/MTkzODRfZXF1aXMt/c3RpY2tlci1zdmct/aWNvbi1jbG9zZS1j/bGlwYXJ0LnBuZw"')

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
    parent.appendChild(encabezado)
    parent.appendChild(section1)
    parent.appendChild(section2)
    parent.appendChild(btn)
    parent.className="padre"

    return parent

}

export const totalSection = totalSectionOp()