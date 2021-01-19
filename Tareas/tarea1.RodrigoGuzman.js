// TAREA 1 //

function esParImapar(valor){
	var resultado = valor % 2;
	if (resultado == 0){
		return "Es Par"
	}else if(resultado == 1){
		return "Es Impar"
	}else{
		return "Variable Erronea"
	}
}

//TAREA 2 //

function indiceCaracter(caracter){
	cadena = "abcdefghijklmnñopqrstuvwxyz"
	resultado = cadena.indexOf(caracter)
	if (resultado == -1) {
		return "Caracter No encontrado"
	}else{
		return resultado
	}
}

//TAREA 3 //
function valorMasIVA(valor){
	tipo = typeof(valor)
	if(tipo == "number"){
		iva = 0.19
		imp_valor = valor * iva
		valor_con_IVA = imp_valor + valor
		return "El precio con impuesto es de $"+valor_con_IVA
	}else{
		return "Error"
	}
}

//TAREA 4 //
function lanzarDado(nombre){
	return function(){
		dado = Math.floor((Math.random() * 6) + 1);	
		return nombre+" tiró un dado y salió "+dado
	}
}

//TAREA 5 //
function Persona(nombre_full, edad){
	this.nombre_full = nombre_full;
	this.edad = edad;
}
Persona.prototype.guardarEnLocalStorage = function(){
	localStorage.setItem("Nombre", this.nombre_full)
	localStorage.setItem("Edad", this.edad)
	return "Persona Guardada en Local Storage"
}
Persona.prototype.guardarEnSessionStorage = function(){
	sessionStorage.setItem("Nombre", this.nombre_full)
	sessionStorage.setItem("Edad", this.edad)
	return "Persona Guardada en Session Storage"
}