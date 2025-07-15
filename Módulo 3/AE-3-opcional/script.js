//1.Crear un arreglo vacío llamado empleados.
let empleados = [];

//2.Agregar al menos 5 objetos de empleados al arreglo, donde cada objeto tenga las siguientes propiedades:
//nombre (string)
//edad (número)
//puesto (string)
//salario (número)

let persona1 = {
    nombre: "Jose",
    edad: 30,
    puesto: "desarrollador jr",
    salario: 800000
};
let persona2 = {
    nombre: "Pedro",
    edad: 50,
    puesto: "aseo",
    salario: 600000
};
let persona3 = {
    nombre: "Diego",
    edad: 31,
    puesto: "gerente",
    salario: 4000000
};
let persona4 = {
    nombre: "Jean",
    edad: 40,
    puesto: "diseñador",
    salario: 1000000
};
let persona5 = {
    nombre: "Héctor",
    edad: 30,
    puesto: "QA",
    salario: 1000000
};

//               0        1       2        3        4
empleados = [persona1,persona2,persona3,persona4,persona5];

//3.Acceder a un elemento específico del arreglo usando su índice y mostrar en consola su información.
console.log("-------------------------------------------------------");
console.log(`datos del tercer empleado:`, empleados[2]);
console.log("-------------------------------------------------------");

//4.Contar el número de empleados en el arreglo usando la propiedad length y mostrarlo en consola.
console.log(`número de empleados: ${empleados.length}`);
console.log("-------------------------------------------------------");

//5.Iterar sobre el arreglo de empleados utilizando un ciclo for para mostrar en consola el nombre de cada empleado.
for(let i=0;i<empleados.length;i++){
    console.log(`datos de empleado número ${i+1}: `, empleados[i]);
};
console.log("-------------------------------------------------------");

//6.Añadir un nuevo empleado al final del arreglo utilizando el método push().
let persona6 = {
    nombre: "Alberto",
    edad: 60,
    puesto: "aseo",
    salario: 550000
};
empleados.push(persona6);

//7.Eliminar un empleado del arreglo utilizando el método splice() y mostrar el arreglo actualizado en consola.
empleados.splice(5,1);
console.log(`arreglo actualizado: `, empleados);
console.log("-------------------------------------------------------");

//8.Realizar operaciones algebraicas:

//8.1 Calcular el salario total de todos los empleados usando un ciclo for o forEach.
let salarioTotal = 0
for(let i=0; i<empleados.length; i++){
    salarioTotal += empleados[i].salario
};
console.log("El suma de los salarios de todos los empleados es de: ", salarioTotal)
console.log("-------------------------------------------------------");

//8.2 Encontrar el empleado con el salario más alto utilizando un ciclo for y una variable para almacenar el máximo.
let salarioMaximo = 0
for(let i=0; i<empleados.length; i++){
    if(empleados[i].salario>salarioMaximo){
        salarioMaximo = empleados[i].salario
    }
}

console.log("El salario máximo de un empleado es de: ", salarioMaximo)
console.log("-------------------------------------------------------");
//8.3 Concatenar los nombres de todos los empleados en un solo string, separado por comas, usando un ciclo y el operador +=.
let listaDeEmpleados = ""
for(let i=0; i<empleados.length; i++){
    listaDeEmpleados += empleados[i].nombre
    if(i+1<empleados.length){
        listaDeEmpleados += ", "
    }
}
console.log(listaDeEmpleados);
console.log("-------------------------------------------------------");

//9.Crear un ciclo while que recorra todos los empleados y verifique si algún empleado tiene un salario superior a 5000. Si lo encuentra, debe mostrar un mensaje indicando que ese empleado tiene un salario alto.



