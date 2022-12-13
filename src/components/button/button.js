
export const buttonCreator=()=>{

    console.log("hola")

    const btn = document.createElement('button')
    btn.textContent='Perfiles de interes'
    let modal = document.getElementById("myModal")
    let body = document.getElementsByTagName("body")
    let span = document.getElementsByClassName("close")[0];
   btn.onclick = function(){
      modal.style.display = "block"
      body.style.position = "static"
      body.style.height = "80%"
      body.style.overflow = "hidden"
    }

   span.onclick = function(){
    modal.style.display = "none"
    body.style.position = "inherit"
    body.style.height = "auto"
    body.style.overflow = "visible"
    }
 

    return btn

}
