class registerLogin extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<div> ¿No tienes cuenta? <u><b>Registrarse</b></u></div>`;
    }
}

window.customElements.define("register-login", registerLogin);