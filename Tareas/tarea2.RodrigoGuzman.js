// Tarea 2
// Ejercicio 1

var mascota = {
	mascotas: ['perros','gatos','canarios','pez','serpiente'],
	eliminarMascota : function(mascotaEliminar){
		indice = this.mascotas.indexOf(mascotaEliminar)
		this.mascotas.splice(indice, 1);
		return this.mascotas;
	},
	eliminarUltimaMascota : function(){
		this.mascotas.pop();
		return this.mascotas;
	},
	agregarMascota : function(mascotaNueva){
		this.mascotas.push(mascotaNueva)
		return this.mascotas;
	},
	contadorMascotas : function(){
		let cont_ = 0
		this.mascotas.forEach(function(mascota){
			if(mascota.endsWith('os')){
				cont_+=1
			}//if
		})//foreach
		return `En el arreglo hay ${cont_} mascotas que terminan con 'os'`;
	},
}


// Ejercicio 2

const trabajador = {
		nombre: 'Jhon Smith',
		cargo: 'QA',
		empresa: {
			ubicación: {
				comuna: 'Santiago',
				puesto: 'nº 24',
			},
			datos: {
				nombre: 'ACME',
			},
			clientes: ['Facebook', 'Google'],
		},
		gustos: ['comer', 'ver televisión', 'dormir'],
		hijos: null,
	}



function infoTrabajadorUno (trabajador){
	const {
		nombre,
		cargo,
		empresa: {datos: {nombre:nombreDatos}},
		gustos:[primero, ...restoGusto],
		hijos,
	} = trabajador
	if (hijos == null){
		hijos2 ='no tiene hijos'
	}else{
		hijos2 = hijo
	}
	return `El trabajador ${nombre} trabaja en ${nombreDatos} con cargo ${cargo} y le gusta ${primero} y ${restoGusto.length} más, ${hijos2}`
}

function infoTrabajadorDos(trabajador){
	const {
		nombre,
		cargo,
		empresa: {
			ubicación: {
				comuna,
				puesto
			},
			clientes: [
				primero,
				segundo,
			],
		},
	} = trabajador
	return `El trabajador ${nombre} va a su trabajo en ${comuna}, es ${cargo}, en el puesto ${puesto}, trabaja con ${primero} y ${segundo}`
}