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

Al coordinar el trabajo creímos que ya existía una rama de trabajo, pero al abrir el repositorio en GitHub el contador mostraba **1 Branch**: solo existía `main`. Lo detectamos revisando el contador de ramas. Lo resolvimos creando la rama `feature-script-js` directamente desde `main`, para que incluyera `index.html` y `style.css`, y desde ahí se abrió el Pull Request #3.

### 4. Modificación al código que podemos explicar

Después de integrar el `script.js` (Pull Request #3), agregamos al final del archivo el bloque del modo oscuro. Ese commit cerró el Issue #1. El código se generó con ayuda de la IA; nosotras lo integramos, lo probamos y podemos explicarlo:

- `document.body.classList.toggle("dark", oscuro)` agrega la clase `dark` al `body` cuando `oscuro` es `true` y la quita cuando es `false`. Con eso `style.css` cambia todos los colores.
- La función `aplicarTema()` junta en un solo lugar el cambio de clase y el texto del botón (🌙 / ☀️), para no repetir código.
- Al guardar en `localStorage` usamos `try/catch`, porque el navegador puede bloquear el almacenamiento (por ejemplo, en modo privado). Así, si falla, la página sigue funcionando.
- Al abrir la página se lee la clave `rick-morty-tema` y se aplica el tema guardado.

## Uso de inteligencia artificial

Usamos dos herramientas: **Claude** (Valentina: estructura, estilos, README y modo oscuro) y **ChatGPT** (Melanie: `script.js`).

### 1. Prompts importantes

**Prompts de Valentina (Claude)**

1. Se subió el PDF con las instrucciones del proyecto y se pidió: *"Dime qué se va a hacer, que sea una checklist, y si es en equipo."* Resultado: lista de requisitos, entregables y preguntas de la presentación.
2. *"Prepara un mensaje para mi compañera: ella hace el back y yo el front. Dile qué va a crear y cuántos commits."* Resultado: reparto de trabajo, ids del HTML acordados y estructura de las tarjetas.
3. *"Vamos a empezar con el archivo index.html."* Resultado: la estructura HTML con buscador, filtros, favoritos y los ids que usa el JavaScript.

**Prompts de Melanie (ChatGPT)**

*Nota: están redactados de forma más formal que los mensajes originales, pero conservan su intención.*

1. *"Necesito desarrollar la lógica JavaScript de un explorador de personajes de Rick and Morty para mi proyecto de Desarrollo de Aplicaciones Web. Te proporcionaré las instrucciones de la actividad, la distribución del trabajo y los identificadores HTML definidos por mi compañera. Ayúdame a desarrollar el archivo `script.js` utilizando `fetch()` para consultar la API, mostrar personajes en tarjetas, implementar un buscador, filtros y una sección de favoritos mediante `localStorage`. El desarrollo debe realizarse por etapas, ya que necesito registrar cuatro commits en GitHub."*
2. *"Estoy desarrollando el archivo `script.js` directamente desde el editor web de GitHub. Necesito incorporar filtros por estado, especie y género, conservando el buscador existente. Indícame qué partes del código debo agregar o reemplazar para que ambas funcionalidades trabajen juntas. También necesito implementar un botón para limpiar los filtros. Revisaremos cada modificación antes de guardar el siguiente commit."*
3. *"Necesito revisar y mejorar la función `cargarPersonajes()` de mi archivo `script.js`. La API de Rick and Morty devuelve una respuesta HTTP 404 cuando no encuentra personajes, pero quiero diferenciar esta situación de un verdadero error de consulta. Ayúdame a modificar la función para mostrar mensajes adecuados en cada caso, indicándome exactamente qué bloque debo reemplazar sin afectar el resto del código."*

### 2. Respuesta de la IA que requirió correcciones

En `script.js`, la primera versión de `cargarPersonajes()` que dio ChatGPT trataba **cualquier** respuesta HTTP incorrecta, incluido el error 404, como una falla general de consulta. Con eso, una búsqueda sin coincidencias habría mostrado "No se pudieron cargar los personajes" en lugar de avisar que no había resultados.

Para corregirlo se pidió una nueva versión que identificara específicamente el estado 404 y mostrara "No se encontraron personajes con esos criterios". Se conservaron las comprobaciones de otros errores con `respuesta.ok` y el bloque `try/catch`, de modo que el código distingue entre una búsqueda sin resultados y un problema de conexión.

### 3. Error encontrado y cómo lo resolvimos

Al coordinar el trabajo creímos que ya existía una rama de trabajo, pero al abrir el repositorio en GitHub el contador mostraba **1 Branch**: solo existía `main`. Lo detectamos revisando el contador de ramas. Lo resolvimos creando la rama `feature-script-js` directamente desde `main`, para que incluyera `index.html` y `style.css`, y desde ahí se abrió el Pull Request #3.

### 4. Modificación al código que podemos explicar

**Modo oscuro (Valentina).** Después de integrar el `script.js` (Pull Request #3), agregamos al final del archivo el bloque del modo oscuro. Ese commit cerró el Issue #1. El código se generó con ayuda de la IA; nosotras lo integramos, lo probamos y podemos explicarlo:

- `document.body.classList.toggle("dark", oscuro)` agrega la clase `dark` al `body` cuando `oscuro` es `true` y la quita cuando es `false`. Con eso `style.css` cambia todos los colores.
- La función `aplicarTema()` junta en un solo lugar el cambio de clase y el texto del botón (🌙 / ☀️), para no repetir código.
- Al guardar en `localStorage` usamos `try/catch`, porque el navegador puede bloquear el almacenamiento (por ejemplo, en modo privado). Así, si falla, la página sigue funcionando.
- Al abrir la página se lee la clave `rick-morty-tema` y se aplica el tema guardado.

**`script.js` (Melanie).** Los bloques de código fueron propuestos por ChatGPT; Melanie los fue incorporando desde GitHub, revisando la ubicación de cada uno antes de guardar los commits:

- **Buscador:** `buscarPersonajes()` consulta personajes por nombre.
- **Filtros:** se reemplazó la versión inicial del buscador por otra con `URLSearchParams`, que combina el nombre con los filtros de estado, especie y género.
- **Favoritos:** se sustituyó el botón deshabilitado por uno que agrega o quita personajes, y se guardan con `localStorage` para conservarlos al recargar.
- **Mensajes:** `cargarPersonajes()` distingue entre resultados inexistentes y errores de consulta.

No se hicieron modificaciones adicionales independientes a lo propuesto por la IA.

### 5. Reflexión: qué aprendimos usando IA

_(Pendiente.)_

## Dificultades

_(Pendiente: agregar las dificultades que tuvimos durante el desarrollo.)_
