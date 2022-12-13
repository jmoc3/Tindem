const info = ["Comunicación social","Administracion de empresas","Contaduria publica","Finanzas y negocios internacionales","Mercadeo y publicidad","Administracion de servicios salud","Administracion logistica","Ingenieria de sistemas","Chef","Servicios generales","Seguridad","Guardia de seguridad"]
/* llamar al div general */
import {register} from "./index.js"



const template = document.createElement("div")
template.classList = "template"
template.appendChild(register())

const app = document.querySelector("#app")
app.appendChild(template)
/* crear contenedores generales y asignarles sus clases*/
const modal = document.createElement("div")
modal.classList = "modal"
modal.id = "modal"
const general = document.createElement("div")
general.classList = "general"
/* crear elemento head, su clase y sus elementos*/
const head = document.createElement("div")
head.classList = "head"
const h1 = document.createElement("h2")
const p = document.createElement("p")
p.classList = "text"

const bodyModal = document.createElement("div")
bodyModal.classList = "body"
const parent = document.createElement("div")
parent.classList = "parent"

for (let i = 1; i < 13; i++) {
    const div = document.createElement("div")
    div.classList = `div${i}`
    parent.appendChild(div)
    const button = document.createElement("input")
    button.classList = "buttoncito"
    button.type = "button"
    button.value = info[i-1]
    div.appendChild(button)
}

const footerModal = document.createElement("div")
footerModal.classList = "footer"
const button = document.createElement("button")
button.classList = "buttonSend"
button.type = " button"
button.innerText = "Enviar"

/* Añadir al documento los elementos creados */
template.appendChild(modal)
modal.appendChild(general)
general.appendChild(head)
head.appendChild(h1)
head.appendChild(p)
general.appendChild(bodyModal)
bodyModal.appendChild(parent)
general.appendChild(footerModal)
footerModal.appendChild(button)

/* añadir el texto depues de crear los elementos */
h1.innerText = "Cuentanos más sobre ti"
p.innerText = "Areas de intereses laborales"



const buttoncito = document.querySelectorAll(".buttoncito")

const changeBackgroundColor = (e)=>{
    e.target.classList.toggle("buttoncitoClick")
}
buttoncito.forEach(element => {
    element.addEventListener("click",changeBackgroundColor)
});

const buttonSend = document.querySelector(".buttonSend").addEventListener("click",()=>{
    window.location = "../../mainView/empresa/company.html"
})

