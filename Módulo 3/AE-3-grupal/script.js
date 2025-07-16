//clase para crear los usuarios
class Cliente{
    //constructor para formar el usuario
    constructor(id, nombre, apellido, email, telefono, activo){
        //se le asigna un valor a cada variable
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.activo = activo;
    }
}
//crear una lista vacia para almacenar los clientes
let clientes = [];

//Agregar 3 objetos a la lista con diferentes datos
clientes.push(new Cliente(1,"Felipe","Rojas","felipe.rojas@gmail.com","123456789",true));
clientes.push(new Cliente(2,"José","Perez","jose.perez@gmail.com","987654321",true));
clientes.push(new Cliente(3,"kathy","Barriga","bandia69@gmail.com","133",false));

//3.Acceder a la información de un cliente:
//Usar un ciclo for para iterar sobre el arreglo de clientes y mostrar los datos de cada cliente (nombre, apellido, email, teléfono)
function mostrarClientes(lista){ // se declara una función para mostar la lista de clientes
    console.log("---------------------------------------------")
    for(let i=0; i<lista.length;i++){//recorre toda la lista de objetos
        //se muestran los datos en consola
        console.log(`Datos del cliente número ${lista[i].id}:`);
        console.log(`Nombre = ${lista[i].nombre}`);
        console.log(`Apellido = ${lista[i].apellido}`);
        console.log(`Correo = ${lista[i].email}`);
        console.log(`Teléfono = ${lista[i].telefono}`);
        console.log(`Activo = ${lista[i].activo}`);
        console.log("---------------------------------------------")
    }
}

//4.Contar la cantidad de clientes activos:
//Utilizar un ciclo for o forEach para contar cuántos clientes tienen el valor activo igual a true.
function contarClientesActivos(lista){
    //se declara un contador, para acumular el total de activos
    let contador = 0;
    lista.forEach(cliente => {
        if (cliente.activo){
            contador++;
        }
    });
    console.log(`Clientes activos: ${contador}`)
}

//5.Agregar un nuevo cliente:
//Crear una función que reciba los datos de un nuevo cliente y lo agregue al arreglo utilizando el método push().
function agregarCliente(lista,clienteNuevo){
    lista.push(clienteNuevo)
}

//uso de la función para agregar un cliente nuevo
agregarCliente(clientes, new Cliente(4,"Camila","Polizi","bandia6969@gmail.com","131",false))


//Eliminar un cliente:
//Crear una función que elimine un cliente por su id utilizando el método splice() para eliminar el objeto del arreglo.
//Asegúrese de que, al eliminar el cliente, el arreglo se actualice correctamente.

function eliminarClientePorId(lista,id){//función para eliminar un cliente por ID, recibe la lista y el id como parámetros
    let test = -2 //se define test con valor -2, para luego si es que no se encuentra el id, usarlo como referencia
    let index = 0 // se define index = 0, para luego guardar el coeficiente de posición del cliente con el id
    for(let i=0; i<lista.length;i++){ //se recorre la lista de clientes
        if (id === lista[i].id){ // si el id ingresado, coincide con el id de un cliente
            test = id // el valor de test cambia al valor del id
            index = i //el valor de index, cambia por el coeficiente de posición del cliente
        }
    }
    // si test tiene valor de -2, significa que el id no fue encontrado
    if (test === -2){
        console.log(`ID no encontrado`)
    } else{ // si test no tiene valor -2, implica que el id fue encontrado en la lista de clientes
        lista.splice(index,1) //se elimina el cliente
        console.log(`Cliente con ID: ${id}. Eliminado!`) // se le muestra al usuario la acción realizada
    }
}

//7.Modificar los datos de un cliente:
//Crear una función que modifique los datos de un cliente existente en el arreglo, por ejemplo, cambiar el teléfono o el estado de activo de false a true

