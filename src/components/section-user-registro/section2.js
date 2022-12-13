import { inputCreator } from '../../components/input/input.js'

export const sectionTwo =()=>{

    //Creacion del titulo
    const title = document.createElement('h2')
    title.textContent="Cuéntanos sobre tu empresa!"
    
    //Creacion del input del NIT empresarial
    const input1 = inputCreator()
    input1.placeholder="NIT"

    //Creacion del input del nombre de la empresa
    const input2 = inputCreator()
    input2.placeholder="Nombre de la empresa"

    //Creacion del div anothercRE donde se encuentrar el input de nit y de nombre de empresa 
    const div1 = document.createElement('div')
    div1.appendChild(input1)
    div1.appendChild(input2)
    div1.className='anotherCre'

    //Creacion del titulo 'Descripcion'
    
    const titleDesc = document.createElement('h3')
    titleDesc.textContent='Descripcion'

    //Creacion del textarea
    const description = document.createElement('textarea')
    description.row="10"
    description.col="30"
    description.className='desc'

    //Creacion del div ContDesc donde se encontrara el titulo 'Descripcion' y el textarea
    const div2 = document.createElement('div')
    div2.className = 'contDesc'
    div2.appendChild(titleDesc)
    div2.appendChild(description)

    //Contenedor donde se encuentra los dos divs 'anotherCre' y 'contDesc'
    const child = document.createElement('div')
    child.appendChild(div1)
    child.appendChild(div2)
    child.className="section-2"
    
    //Conteendor padre de la seccion 2 y su titulo
    const parent = document.createElement('div')
    parent.appendChild(title)
    parent.appendChild(child)

    return parent
    
}
