
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
