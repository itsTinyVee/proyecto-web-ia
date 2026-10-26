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

_(Pendiente: explicar cómo funciona la modificación cuando esté implementada.)_

## Uso de inteligencia artificial

### 1. Prompts importantes

_(Pendiente: agregar los 3 prompts más importantes que usamos.)_

### 2. Respuesta de la IA que requirió correcciones

_(Pendiente: describir qué respondió la IA, qué estaba mal y cómo lo corregimos.)_

### 3. Error encontrado y cómo lo resolvimos

_(Pendiente.)_

### 4. Modificación al código que podemos explicar

_(Pendiente.)_

### 5. Reflexión: qué aprendimos usando IA

_(Pendiente.)_

## Dificultades

_(Pendiente: agregar las dificultades que tuvimos durante el desarrollo.)_
