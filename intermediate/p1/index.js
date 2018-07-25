class Toggable {
	constructor(element) {
		//inicializador
		this.element = element
		this.element.innerHTML = "Off"
		this.activated = false
		this.onClick = this.onClick.bind(this)
		//necesario para que js no tome como this al objeto boton del html
		this.element.addEventListener('click', this.onClick)
	}

	onClick () {
		//cambiar el estado interno
		//lamaos a toggleText
		this.activated = !this.activated
		this.toggleText()
	}
	toggleText () {
		//cambiar el texto
		this.element.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getElementById("boton")

const miBoton = new Toggable(button)