import { section1 } from './section1.js'
import { section2 } from './section2.js'
import { buttonCreator } from '../../components/button/button.js'


const totalSectionOp = ()=>{

    const title = document.createElement('h1')
    title.textContent="Registro Usuario - Empresa"

    const btn = buttonCreator()
    btn.type=""

    const parent = document.createElement('div')
    parent.appendChild(title)
    parent.appendChild(section1)
    parent.appendChild(section2)
    parent.appendChild(btn)
    parent.className="padre"

    return parent

}

export const totalSection = totalSectionOp()