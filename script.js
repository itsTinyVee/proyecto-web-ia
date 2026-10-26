
const API_URL = "https://rickandmortyapi.com/api/character";

const contenedorPersonajes = document.getElementById("characters-container");
const mensaje = document.getElementById("message");

// Crear una tarjeta con los datos de un personaje.
function crearTarjeta(personaje) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "card";

  const imagen = document.createElement("img");
  imagen.src = personaje.image;
  imagen.alt = `Imagen de ${personaje.name}`;
  imagen.loading = "lazy";

  const cuerpo = document.createElement("div");
  cuerpo.className = "card-body";

  const nombre = document.createElement("h3");
  nombre.className = "card-name";
  nombre.textContent = personaje.name;

  const informacion = document.createElement("p");
  informacion.className = "card-info";
  informacion.textContent =
    `${personaje.status} · ${personaje.species} · ${personaje.gender}`;

  cuerpo.append(nombre, informacion);

  const botonFavorito = document.createElement("button");
  botonFavorito.className = "fav-btn";
  botonFavorito.textContent = "⭐ Agregar a favoritos";
  botonFavorito.disabled = true;

  tarjeta.append(imagen, cuerpo, botonFavorito);

  return tarjeta;
}

// Mostrar los personajes recibidos de la API.
function mostrarPersonajes(personajes) {
  contenedorPersonajes.replaceChildren();

  personajes.forEach((personaje) => {
    contenedorPersonajes.appendChild(crearTarjeta(personaje));
  });
}

// Consultar los personajes mediante fetch().
async function cargarPersonajes(url = API_URL) {
  mensaje.textContent = "Cargando personajes...";
  mensaje.classList.remove("error");
  contenedorPersonajes.replaceChildren();

  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    mostrarPersonajes(datos.results);
    mensaje.textContent = "";

  } catch (error) {
    console.error("Error al consultar la API:", error);
    mensaje.textContent = "No se pudieron cargar los personajes.";
    mensaje.classList.add("error");
  }
}

// Ejecutar la consulta al abrir la página.
cargarPersonajes();


 // Obtener el buscador y su botón.
const campoBusqueda = document.getElementById("search-input");
const botonBusqueda = document.getElementById("search-btn");

 // Obtener los filtros del HTML.
const filtroEstado = document.getElementById("filter-status");
const filtroEspecie = document.getElementById("filter-species");
const filtroGenero = document.getElementById("filter-gender");
const botonLimpiar = document.getElementById("clear-filters");


// Buscar personajes por nombre.

function buscarPersonajes() {
  const nombre = campoBusqueda.value.trim();

  // Preparar los parámetros de búsqueda.
  const parametros = new URLSearchParams();

  if (nombre) {
    parametros.set("name", nombre);
  }

  if (filtroEstado.value) {
    parametros.set("status", filtroEstado.value);
  }

  if (filtroEspecie.value) {
    parametros.set("species", filtroEspecie.value);
  }

  if (filtroGenero.value) {
    parametros.set("gender", filtroGenero.value);
  }

  // Construir la URL con los filtros seleccionados.
  const consulta = parametros.toString();
  const url = consulta ? `${API_URL}?${consulta}` : API_URL;

  cargarPersonajes(url);
}


// Buscar al hacer clic en el botón.
botonBusqueda.addEventListener("click", buscarPersonajes);

// Buscar también al presionar Enter.
campoBusqueda.addEventListener("keydown", function(evento) {
  if (evento.key === "Enter") {
    buscarPersonajes();
  }
});


 // Aplicar filtros cuando el usuario cambie una opción.
filtroEstado.addEventListener("change", buscarPersonajes);
filtroEspecie.addEventListener("change", buscarPersonajes);
filtroGenero.addEventListener("change", buscarPersonajes);

// Limpiar el buscador y todos los filtros.
botonLimpiar.addEventListener("click", function() {
  campoBusqueda.value = "";
  filtroEstado.value = "";
  filtroEspecie.value = "";
  filtroGenero.value = "";

  cargarPersonajes();
});

