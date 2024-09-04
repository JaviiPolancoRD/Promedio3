//Declarar la variable 
const nu1 = prompt("Ingresa el numero 1")
const nu2 = prompt("Ingresa el numero 2")
const nu3 = prompt("Ingresa el numero 3")

//Convetir a entero 
const nu1Int = Number(nu1)
const nu2Int = Number(nu2)
const nu3Int = Number(nu3)

//Sumar los enteros
const resultado = nu1Int + nu2Int + nu3Int

//Calcular el promedio 
const promedio = resultado / 3

//Mostrar el resultado 
alert("Promedio de los 3 numeros es: " + promedio )