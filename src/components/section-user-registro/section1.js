import { inputCreator } from '../../components/input/input.js'

const sectionOne =()=>{

    const title = document.createElement('h1')
    title.textContent="Registro Usuario - Empresa"
    
   
    const image = document.createElement('div')
    image.className = 'imageUser'
    const div1 = document.createElement('div')
    div1.appendChild(image)

    

    const label1 = document.createElement('label')
    label1.textContent="Correo Electronico"
    const input1 = inputCreator()

    const label2 = document.createElement('label')
    label2.textContent ="Contraseña"
    const input2 = inputCreator()

    const inputsLabel1 = document.createElement('div')
    inputsLabel1.appendChild(label1)
    inputsLabel1.appendChild(input1)

    const inputsLabel2 = document.createElement('div')
    inputsLabel2.appendChild(label2)
    inputsLabel2.appendChild(input2)

    const div2 = document.createElement('div')
    div2.appendChild(inputsLabel1)
    div2.appendChild(inputsLabel2)

    const child = document.createElement('div')
    child.appendChild(div1)
    child.appendChild(div2)

    const parent = document.createElement('div')
    parent.appendChild(title)
    parent.appendChild(child)

    return parent
    
}

export const section1 = sectionOne()

