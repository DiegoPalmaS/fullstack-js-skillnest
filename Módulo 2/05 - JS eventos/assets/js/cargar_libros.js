let lista_libros = inicializar_catalogo();

mostrar_catalogo(lista_libros);

// Constructor de objetos tipo Libro
function Libro(sku, titulo, autor, genero) {
    this.sku = sku;
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
}

function inicializar_catalogo() {
    const catalogo = [];

    // Terror
    catalogo.push(new Libro("9786073813983","Cementerio de Animales","Stephen King","Terror"));
    catalogo.push(new Libro("9789563252309","El Resplandor","Stephen King","Terror"));
    catalogo.push(new Libro("9789585579286","Doctor Sueño","Stephen King","Terror"));
    catalogo.push(new Libro("9788466347921","IT","Stephen King","Terror"));
    catalogo.push(new Libro("9788466352086","Carrie","Stephen King","Terror"));
    // Infantil
    catalogo.push(new Libro("9789962182245","Cuentos de Animales","Fabiola Cabello","Infantil"));
    catalogo.push(new Libro("9789500734561","El Sueño del Pequeño Capitan Arsenio","Pablo Bernasconi","Infantil"));
    catalogo.push(new Libro("9789561809147","Monstruos de Cementerio","Fabiola Cabello","Infantil"));
    catalogo.push(new Libro("9789561236806","Niño Cocodrilo","Ron Lewis","Infantil"));
    catalogo.push(new Libro("9789561809291","Una Jirafa muy Especial","Sofia Faure","Infantil"));
    // Fantasía
    catalogo.push(new Libro("9789566075226","Animales Fantásticos","J.K Rowling","Fantasía"));
    catalogo.push(new Libro("9788408046035","Las Crónicas de Narnia","C.S Lewis","Fantasía"));
    catalogo.push(new Libro("9789878474458","Entremuros","Robert Jackson","Fantasía"));
    catalogo.push(new Libro("9789585305922","Percy Jackson : El Ladrón del Rayo","Rick Riordan","Fantasía"));
    catalogo.push(new Libro("9786073193351","Percy Jackson : Mar de Monstruos","Rick Riordan","Fantasía"));
    
    return catalogo;
}

function mostrar_catalogo(libros) {
    const nodo_catalogo = document.getElementById("catalogo");
    let contenido = '';
    let descripcion = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nostrum voluptas aliquam deleniti molestias reprehenderit consectetur animi magni. Assumenda cumque error quaerat provident possimus rem corrupti. Facere quod quasi exercitationem!"

    // Crear cada card para cada libro en lista de libros
    libros.forEach(libro => {
        contenido += `
            <div id="${libro.sku}" class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${libro.titulo}</h5>
                        <p class="card-text">
                            <ul class="list-unstyled">
                                <li><strong>Autor:</strong> ${libro.autor}</li>
                                <li><strong>Género:</strong> ${libro.genero}</li>
                            </ul>
                            <p>${descripcion}</p>
                        </p>
                    </div>
                </div>
            </div> `
    });

    //Insertar HTML en el nodo del DOM
    nodo_catalogo.innerHTML = contenido;
}

document.getElementById("formulario-busqueda").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el reload
    const texto = document.getElementById("busqueda").value.toLowerCase().trim();

    const filtrados = lista_libros.filter(libro =>
        libro.titulo.toLowerCase().includes(texto) ||
        libro.autor.toLowerCase().includes(texto) ||
        libro.genero.toLowerCase().includes(texto)
    );

    mostrar_catalogo(filtrados);
    document.getElementById("resultado-busqueda").textContent =
    `Se encontraron ${filtrados.length} libros.`;
});

//validación del formulario
document.getElementById("formulario-registro").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();

    if (!nombre || !email || !pass) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert("¡Registro exitoso!");
});


