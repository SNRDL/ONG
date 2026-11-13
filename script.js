// BOTON CELULAR
function flexToggle() {
    const nav = document.querySelector("#flexNav");
    const button = document.querySelector("#barraEnlaces nav button");
    const abierto = nav.classList.toggle("flexToggle");
    button.setAttribute("aria-expanded", String(abierto));
}
// DONAR
function abrirModal() {
    const nuevoModal = document.createElement("div")
        nuevoModal.innerHTML =` 
            <h1>¡Gracias por tu aporte!</h1>
            <p>Con tu donación estás ayudando a que muchos clubes emergentes de los barrios puedan emerger al fútbol profesional.</p>
            <h2>Selecciona  la cantidad:</h2>
                <select id="precios">}
                    <option value="1">$5.000</option>
                    <option value="2">$7.000</option>
                    <option value="3">$10.000</option>
                    <br>
                </select>
            <button onclick = "cerrarModal()">CERRAR</button></center>
    `
    nuevoModal.classList.add("nuevoModal")
    document.body.appendChild(nuevoModal)
}
function cerrarModal(){
        document.querySelector(".nuevoModal").remove()
}
// REGISTRASE
function abrirRegistrarse() {
    const divUno = document.createElement("div")
        divUno.innerHTML =`
            <h1>¡Cada vez somos más!</h1>
            <p>Con tu registro estas validando tu firma, y demostrando tu disconformidad con la gestión 
            actual de la Asociación Argentina de Fútbol.</p>
            <h2>⬇️Ayudanos a cambiarla⬇️</h2><p></p>
            <p class="datos">Nombre:</p>
            <input></input>
            <p class="datos">Apellido:</p> 
            <input></input>
            <p class="datos">Apodo:</p>
            <input></input>
            <p class="datos">Fecha de Nacimiento:</p><input type="date"></input>
            <input type="submit" value="Enviar" onclick="cerrarRegistro()"></input>
        `
    divUno.classList.add("divUno")
    document.body.appendChild(divUno)  
}
function cerrarRegistro(){
    document.querySelector(".divUno").remove()
}
// 
