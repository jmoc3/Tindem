export function register() {
    const divPadre = document.createElement("div")
    divPadre.className = "container"   
    const left = document.createElement("div")
    left.className = "left"   
    divPadre.appendChild(left)
    const rigth = document.createElement("div")
    rigth.className = "rigth"
    divPadre.appendChild(rigth) 

   

    //imagen
    const divImg = document.createElement("div")
    left.appendChild(divImg) 
    divImg.textContent="Imagen-perfil"
    divImg.className = "img"

   

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

    // aca empieza la parte de pao 

     //botones
    const labelBtn = document.createElement("label")
    labelBtn.className = "titleGender"
    left.appendChild(labelBtn)
    labelBtn.textContent = "Identificacion de Genero"

    const btn = document.createElement("div")
    left.appendChild(btn)
    btn.className ="btns"
   //mujer 
    const contentWoman = document.createElement("div")
    btn.appendChild(contentWoman)
    contentWoman.className = "contentWoman"

    const  btnWoman = document.createElement("button")
    contentWoman.appendChild(btnWoman)
    btnWoman.className ="btnGender"

    const textWoman = document.createElement("label")
    textWoman.textContent = "Mujer"
    contentWoman.appendChild(textWoman)
    textWoman.className = "labelGender"

    //hombre

    const contentMen = document.createElement("div")
    btn.appendChild(contentMen)
    contentMen.className = "contentMen"

    const  btnMen = document.createElement("button")
    contentMen.appendChild(btnMen)
    btnMen.className ="btnGender"

    const textMen = document.createElement("label")
    textMen.textContent = "Hombre"
    contentMen.appendChild(textMen)
    textMen.className = "labelGender"

    //otro 
    
    const contentOtro = document.createElement("div")
    btn.appendChild(contentOtro)
    contentOtro.className = "contentOtro"

    const btnOtro = document.createElement("button")
    contentOtro.appendChild(btnOtro)
    btnOtro.className = "btnGender"

    const textOtro = document.createElement("label")
    textOtro.textContent = "Otro"
    contentOtro.appendChild(textOtro)
    textOtro.className = "labelGender"
   

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

