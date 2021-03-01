const arrowFunction =(x) => { return x }

//Tarea 3
//Ejercicio 1
//Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta
const busquedaIngredientes = () => {
	return sandwichOrders.filter(
		item => item.ingredients.includes('lechuga') && item.ingredients.includes('palta')
	)
}

//Ejercicio 2
/*Función que me permita encontrar una orden a través del id 
y que me devuelva un string con el siguiente formato de ejemplo: 
La orden fue realizada el (09-10-2020), la orden llevó (mechada) y (bagette). 
En caso de no encontrar nada a través del id, el mensaje, a modo de ejemplo, deberá ser: 
No se encontró la orden con id (800)*/

const busquedaOrden = (idOrden) => {
	orden = sandwichOrders.find(
		item => item.id === (idOrden)
	)//.find
	if(orden != undefined){
		let {ordered, bread, protein}  = orden
		return `La orden fue realizada el ${ordered}, la orden llevó ${protein} y ${bread}.`
	}else{
		return `No se encontró la orden con ${idOrden}`
	}//else
}

//Ejercicio 3
/*Función que me permita encontrar una orden a través del id
 y que me indique si la orden incluye pepinillos entre sus ingredients, 
 debería devolver un true|false como respuesta.*/
const busquedaPepinillos = (idOrden) => {
	orden = sandwichOrders.find(
		item => item.id === (idOrden)
	)//.find
	if(orden != undefined){
		let {ingredients}  = orden
		console.log(ingredients.includes('pepinillos'))
	}
}



//Ejercicio 4
/*Función que me permita encontrar todas las orden que se hicieron en un día en específico, 
es decir, si yo coloco 20-10-2020, la función me debería devolver: 
Se encontraron N ordenes para la fecha 20-10-2020.*/
const busquedaFecha = (fecha) => {
    orden = sandwichOrders.filter(
        item => item.ordered === fecha
    )
    return `Se encontraron ${item.length} ordenes para la fecha ${fecha}`;
}


//Ejercicio 5
/*Función que me devuelva las fechas de todas las ordenes que tuvieron como proteina
 not burger y de ingredients cebolla caramelizada*/
const busqeudaFechaIngrediente = () => {
    orden = sandwichOrders.filter(
        item => item.protein === 'not burger' && item.ingredients.includes('cebolla caramelizada')
    ).map(item => item.ordered)
    return orden;
}
