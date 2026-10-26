
const API_URL = "https://rickandmortyapi.com/api/character";

const contenedorPersonajes = document.getElementById("characters-container");
const mensaje = document.getElementById("message");


 // Obtener los elementos de la sección de favoritos.
const contenedorFavoritos = document.getElementById("favorites-container");
const mensajeFavoritos = document.getElementById("favorites-message");

// Clave para guardar favoritos en el navegador.
const CLAVE_FAVORITOS = "rick-morty-favoritos";

// Recuperar los favoritos guardados anteriormente.
let favoritos = [];

try {
  const guardados = JSON.parse(
    localStorage.getItem(CLAVE_FAVORITOS) || "[]"
  );

  favoritos = Array.isArray(guardados) ? guardados : [];
} catch (error) {
  console.error("Error al recuperar favoritos:", error);
}

// Guardar los personajes mostrados actualmente.
let personajesActuales = [];


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

// Comprobar si el personaje ya está guardado.
const guardado = favoritos.some((favorito) => favorito.id === personaje.id);

botonFavorito.textContent = guardado
  ? "⭐ Quitar de favoritos"
  : "⭐ Agregar a favoritos";

// Ejecutar la función al presionar el botón.
botonFavorito.addEventListener("click", function() {
  alternarFavorito(personaje);
});


  tarjeta.append(imagen, cuerpo, botonFavorito);

  return tarjeta;
}


 // Mostrar los personajes guardados como favoritos.
function mostrarFavoritos() {
  contenedorFavoritos.replaceChildren();

  if (favoritos.length === 0) {
    mensajeFavoritos.textContent = "Todavía no tienes favoritos.";
  } else {
    mensajeFavoritos.textContent = "";
  }

  favoritos.forEach((personaje) => {
    contenedorFavoritos.appendChild(crearTarjeta(personaje));
  });
}

// Agregar o quitar un personaje de favoritos.
function alternarFavorito(personaje) {
  const guardado = favoritos.some(
    (favorito) => favorito.id === personaje.id
  );

  const nuevosFavoritos = guardado
    ? favoritos.filter((favorito) => favorito.id !== personaje.id)
    : [...favoritos, personaje];

  // Guardar los cambios en el navegador.
  try {
    localStorage.setItem(
      CLAVE_FAVORITOS,
      JSON.stringify(nuevosFavoritos)
    );
  } catch (error) {
    console.error("Error al guardar favoritos:", error);
    mensajeFavoritos.textContent = "No se pudieron guardar los favoritos.";
    return;
  }

  favoritos = nuevosFavoritos;

  // Actualizar las tarjetas y la sección de favoritos.
  mostrarFavoritos();
  mostrarPersonajes(personajesActuales);
}


// Mostrar los personajes recibidos de la API.
function mostrarPersonajes(personajes) {
  personajesActuales = personajes;
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
  personajesActuales = [];

  try {
    const respuesta = await fetch(url);

    // La API responde 404 cuando no encuentra personajes.
    if (respuesta.status === 404) {
      mostrarPersonajes([]);
      mensaje.textContent = "No se encontraron personajes con esos criterios.";
      return;
    }

    // Detectar otros errores de la API.
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if (!Array.isArray(datos.results) || datos.results.length === 0) {
      mostrarPersonajes([]);
      mensaje.textContent = "No se encontraron personajes.";
      return;
    }

    // Mostrar los personajes encontrados.
    mostrarPersonajes(datos.results);
    mensaje.textContent = "";

  } catch (error) {
    console.error("Error al consultar la API:", error);
    mensaje.textContent = "Falló la consulta. Intenta nuevamente.";
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

 // Mostrar los favoritos guardados al abrir la página.
mostrarFavoritos();
// ===== Modo oscuro / claro (reto extra) =====
const botonTema = document.getElementById("theme-toggle");
const CLAVE_TEMA = "rick-morty-tema";

// Aplicar el tema: agrega o quita la clase "dark" del body y cambia el texto del botón.
function aplicarTema(oscuro) {
  document.body.classList.toggle("dark", oscuro);
  botonTema.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
}

// Recuperar el tema guardado al abrir la página.
let temaOscuro = false;
try {
  temaOscuro = localStorage.getItem(CLAVE_TEMA) === "dark";
} catch (error) {
  console.error("Error al recuperar el tema:", error);
}
aplicarTema(temaOscuro);

// Cambiar de tema al hacer clic y guardar la preferencia.
botonTema.addEventListener("click", function () {
  const oscuro = !document.body.classList.contains("dark");
  aplicarTema(oscuro);

  try {
    localStorage.setItem(CLAVE_TEMA, oscuro ? "dark" : "light");
  } catch (error) {
    console.error("Error al guardar el tema:", error);
  }
});
