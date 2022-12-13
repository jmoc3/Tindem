export function register() {
    const divPadre = document.createElement("div")
    divPadre.className = "container"   
    const left = document.createElement("div")
    left.className = "left"   
    divPadre.appendChild(left)
    const rigth = document.createElement("div")
    rigth.className = "rigth"
    divPadre.appendChild(rigth) 

    //Registro
    const h2 = document.createElement("h2")
    left.appendChild(h2) 
    h2.textContent = "Registro - Aspirante"

    //imagen
    const divImg = document.createElement("div")
    left.appendChild(divImg) 
    divImg.textContent="Imagen-perfil"
    divImg.className = "img"

    //Perfil
    const perfil = document.createElement("div")
    perfil.className = "conPerfil"
    left.appendChild(perfil)
    const p = document.createElement("p")
    p.textContent="Descripcion Perfil"
    perfil.appendChild(p) 
    const pPerfil = document.createElement("p")
    pPerfil.className = "pPerfil"
    pPerfil.textContent = "Experiencia laboral, Educacion, competencoas humanas..."
    const divPerfil = document.createElement("div")
    divPerfil.className = "divPerfil"
    divPerfil.appendChild(pPerfil)
    perfil.appendChild(divPerfil)

    //formulario
    const form = document.createElement("form") 
    rigth.appendChild(form)
    form.className = "form"
    const labelNom = document.createElement("label")
    labelNom.textContent = "Nombre Completo "
    labelNom.className ="nom"
    form.appendChild(labelNom)
    const inputNom = document.createElement("input")
    form.appendChild(inputNom)

    //botones
    const btn = document.createElement("div")
    form.appendChild(btn)
    btn.className ="btns"
    const  btnWomen = document.createElement("button")
    btn.appendChild(btnWomen)
    btnWomen.className ="btnW"
    btnWomen.textContent = "Mujer"
    const  btnMen = document.createElement("button")
    btn.appendChild(btnMen)
    btnMen.textContent = "Hombre"
    const  btnOtro = document.createElement("button")
    btn.appendChild(btnOtro)
    btnOtro.textContent = "Otro"

    //cumpleaños
    const pBirth = document.createElement("label")
    form.appendChild(pBirth)
    pBirth.className = "birth"
    pBirth.textContent = "Fecha De Nacimiento"
    const birth = document.createElement("input")
    form.appendChild(birth)
    birth.type ="date"

    //usuario
    const labelUser = document.createElement("label")
    form.appendChild(labelUser)
    labelUser.textContent = "Usuario"
    const inputUser = document.createElement("input")
    form.appendChild(inputUser)

    //contraseña
    const labelPassword = document.createElement("label")
    form.appendChild(labelPassword)
    labelPassword.textContent = "Contraseña"
    const inputPassword = document.createElement("input")
    form.appendChild(inputPassword) 
    inputPassword.type ="password"

    //intereses
    const divInteres =  document.createElement("div")
    rigth.appendChild(divInteres)
    const aInteres = document.createElement("a")
    aInteres.addEventListener("click", ()=>{
        const modal = document.querySelector("#modal")
        modal.classList.toggle("modal")
        modal.classList.toggle("block")
    })
    divInteres.appendChild(aInteres)
    divInteres.className = "interes"
    aInteres.textContent="SECCION DE INTERESES LABORALES"
    return divPadre
}

