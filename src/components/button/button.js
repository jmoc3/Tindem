
export const buttonCreator=()=>{

    console.log("hola")

    const btn = document.createElement('button')
    btn.textContent='Perfiles de interes'
    let modal = document.getElementById("myModal")
   let body = document.getElementsByTagName("body")
   btn.onclick = function(){
      modal.style.display = "block"
      body.style.position = "static"
      body.style.height = "80%"
      body.style.overflow = "hidden"
   }

    return btn

}
