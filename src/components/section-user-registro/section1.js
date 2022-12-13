import { inputCreator } from '../../components/input/input.js'


export const sectionOne =()=>{
   
    const image = document.createElement('div')
    image.className = 'imageUser'
    const div1 = document.createElement('div')
    div1.appendChild(image)
    div1.className='imageCont'

    const label1 = document.createElement('label')
    label1.textContent="Correo Electronico"
    label1.className = "emailLabel"
    const input1 = inputCreator()
    input1.className = "email"

    const label2 = document.createElement('label')
    label2.textContent ="Contraseña"
    label2.className = "pswLabel"
    const input2 = inputCreator()
    input2.type = 'password'
    input2.className = "psw"

    const inputsLabel1 = document.createElement('div')
    inputsLabel1.className='inputsLabel-1'
    inputsLabel1.appendChild(label1)
    inputsLabel1.appendChild(input1)

    const inputsLabel2 = document.createElement('div')
    inputsLabel2.className='inputsLabel-2'
    inputsLabel2.appendChild(label2)
    inputsLabel2.appendChild(input2)

    const div2 = document.createElement('div')
    div2.appendChild(inputsLabel1)
    div2.appendChild(inputsLabel2)
    div2.className = 'basicCre'

    const child = document.createElement('div')
    child.appendChild(div1)
    child.appendChild(div2)
    child.className="section-1"

    return child
    
}


