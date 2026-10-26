# proyecto-web-ia

Explorador interactivo de personajes de **Rick and Morty**. La aplicación consume datos reales de la [Rick and Morty API](https://rickandmortyapi.com/documentation) con `fetch()` y permite buscar, filtrar y guardar personajes favoritos.

- **Repositorio:** https://github.com/itsTinyVee/proyecto-web-ia
- **Aplicación publicada (GitHub Pages):** https://itstinyvee.github.io/proyecto-web-ia/

## Integrantes

| Integrante | Usuario de GitHub | Responsabilidad |
|---|---|---|
| [Valentina Moreno] | @itsTinyVee | Estructura (`index.html`), estilos (`style.css`), README y reto extra |
| [Melanie Ayuso] | @ayusomolinam-ctrl | Lógica en JavaScript (`script.js`): fetch, buscador, filtros y favoritos |

**Materia:** Aplicaciones Web · **Carrera:** Desarrollo de Software Multiplataforma · **Grupo:** 4A · UTM

## Descripción

La página muestra personajes de la serie con su imagen y sus datos (estado, especie y género). El usuario puede:

- Buscar personajes por nombre.
- Filtrar por estado, especie y género.
- Guardar personajes en una sección de **favoritos**, que se conserva al cerrar el navegador gracias a `localStorage`.
- Ver mensajes claros cuando no hay resultados o cuando falla la consulta a la API.
- Usar la página desde un celular o una computadora (diseño adaptable).

## Instrucciones de uso

1. Abre la aplicación en el enlace de GitHub Pages.
2. Escribe un nombre en el buscador y presiona **Buscar**.
3. Usa los filtros de **Estado**, **Especie** y **Género** para acotar los resultados. El botón **Limpiar filtros** los reinicia.
4. Presiona **⭐ Agregar a favoritos** en una tarjeta para guardarla; aparecerá en la sección **Mis favoritos**.
5. Presiona el botón de la esquina superior para cambiar entre modo claro y oscuro.

## Tecnologías

- HTML5
- CSS3 (variables CSS, Grid y media queries)
- JavaScript (`fetch()` y `localStorage`)
- [Rick and Morty API](https://rickandmortyapi.com/)
- GitHub y GitHub Pages
- Claude como apoyo de IA

## Estructura del proyecto

| Archivo | Función |
|---|---|
| `index.html` | Estructura de la página: buscador, filtros, resultados y favoritos |
| `style.css` | Estilos, diseño responsivo y colores del modo oscuro |
| `script.js` | Consulta a la API, buscador, filtros, favoritos y mensajes |
| `README.md` | Documentación del proyecto |

## Reto extra

**Funcionalidad elegida:** modo oscuro y claro.

**Cómo funciona:**
- En `style.css` los colores están guardados como variables CSS (`--bg`, `--text`, etc.). La clase `body.dark` les asigna otros valores, así que toda la página cambia de color sin duplicar estilos.
- En `script.js`, el botón `#theme-toggle` usa `classList.toggle("dark")` para agregar o quitar esa clase en el `body` y cambia su texto (🌙 Modo oscuro / ☀️ Modo claro).
- La elección se guarda en `localStorage` con la clave `rick-morty-tema`. Al abrir la página se lee ese valor y se aplica el tema, así que se conserva al recargar.

## Uso de inteligencia artificial

### 1. Prompts importantes

1. Se subió el PDF con las instrucciones del proyecto y se pidió: *"Dime qué se va a hacer, que sea una checklist, y si es en equipo."* Resultado: lista de requisitos, entregables y preguntas de la presentación.
2. *"Prepara un mensaje para mi compañera: ella hace el back y yo el front. Dile qué va a crear y cuántos commits."* Resultado: reparto de trabajo, ids del HTML acordados y estructura de las tarjetas.
3. *"Vamos a empezar con el archivo index.html."* Resultado: la estructura HTML con buscador, filtros, favoritos y los ids que usa el JavaScript.

### 2. Respuesta de la IA que requirió correcciones

El primer mensaje para coordinar el trabajo indicaba que mi compañera trabajara en una rama ya creada. Al revisar GitHub, el repositorio mostraba **1 Branch** (solo `main`), así que esa rama no existía. Aunque hubiera existido, se habría creado antes de que `index.html` estuviera subido. La IA corrigió la indicación: crear la rama `feature-script-js` **desde `main`** para partir de la estructura ya subida.

### 3. Error encontrado y cómo lo resolvimos

_(Pendiente.)_

### 4. Modificación al código que podemos explicar

_(Pendiente.)_

### 5. Reflexión: qué aprendimos usando IA

_(Pendiente.)_

## Dificultades

_(Pendiente: agregar las dificultades que tuvimos durante el desarrollo.)_
