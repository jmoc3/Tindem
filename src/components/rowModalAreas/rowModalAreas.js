import {areaCreator} from '../../components/rowModalAreas/area.js'

export const rowModalCreator=()=>{

    const area1 = areaCreator('Comunicacion social')
    const area2 = areaCreator('Administracion de empresas')
    const area3 = areaCreator('contaduria publica')
    const area4 = areaCreator('Ingenieria en sistemas')


    const row = document.createElement('div')
    row.className='father'
    row.appendChild(area1)
    row.appendChild(area2)
    row.appendChild(area3)
    row.appendChild(area4)

    return row


    
}