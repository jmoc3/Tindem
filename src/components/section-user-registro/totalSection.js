import { encaCreator } from './encabezado.js'
import { sectionOne } from './section1.js'
import { sectionTwo } from './section2.js'
import { buttonCreator } from '../../components/button/button.js'


const totalSectionOp = ()=>{

    const encabezado = encaCreator('Registor Usuario - Empresa')/*, 'https://imgs.search.brave.com/6qhMR1Aw9nsEP5rgfTySp-8ddBIscTUWEjnUFItY1lE/rs:fit:320:320:1/g:ce/aHR0cHM6Ly9jcG5n/LnBpa3BuZy5jb20v/cG5nbC9zLzUyMS01/MjE5Mzg0X2VxdWlz/LXN0aWNrZXItc3Zn/LWljb24tY2xvc2Ut/Y2xpcGFydC5wbmc'*/

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