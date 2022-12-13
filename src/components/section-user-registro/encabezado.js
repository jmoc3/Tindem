export const encaCreator = (textTitle,url)=>{

    const title = document.createElement('h1')
    title.textContent=textTitle

    const equis = document.createElement('img')
    equis.src=url

    const parent = document.createElement('div')
    parent.appendChild(title)
    parent.appendChild(equis)
    parent.className="padreEnc"

    return parent

}
