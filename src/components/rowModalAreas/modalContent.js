import {rowModalCreator} from '../rowModalAreas/rowModalAreas.js'

export const modalContainerContent =()=>{
    const cerrar = document.createElement('span')
    cerrar.textContent='X'
    const titulo = document.createElement('h1')
    titulo.textContent='Cuentanos mas sobre ti'
    const rowAreas = rowModalCreator()
    const modalContent = document.createElement('div')
    modalContent.appendChild(cerrar)
    modalContent.appendChild(titulo)
    modalContent.appendChild(rowAreas)
    

    return modalContent
}