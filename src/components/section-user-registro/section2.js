import { inputCreator } from '../../components/input/input.js'

const sectionTwo =()=>{

    const title = document.createElement('h2')
    title.textContent="Cuéntanos sobre tu empresa!"
    

    const input1 = inputCreator()
    input1.placeholder="NIT"

    const input2 = inputCreator()
    input2.placeholder="Nombre de la empresa"

    const div1 = document.createElement('div')
    div1.appendChild(input1)
    div1.appendChild(input2)
    div1.className='anotherCre'

    const description = document.createElement('textarea')
    description.row="10"
    description.col="30"

    const div2 = document.createElement('div')
    div2.appendChild(description)

    const child = document.createElement('div')
    child.appendChild(div1)
    child.appendChild(div2)
    child.className="section-2"
    
    const parent = document.createElement('div')
    parent.appendChild(title)
    parent.appendChild(child)

    return parent
    
}

export const section2 = sectionTwo()