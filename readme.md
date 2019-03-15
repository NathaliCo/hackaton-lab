# Couponema

¿Cansado de que tu plataforma de streaming (la cual ya pagaste una membresía) le falten tus películas favoritas? Couponema es tu solución ofreciendo descuentos increíbles.

# Definición del producto

El proceso para crear el producto se basó en una problemática que se encontró con los diferentes servicios de streaming:
 - Los altos costos de las membresías de estos servicios.
 - La pérdida de tiempo que implica saltar entre plataformas para encontrar lo que quieres ver.
 
Por lo cual se diseña Couponema. Una plataforma que permite al usuario encontrar películas y series en varios servicios de streaming, compra y renta con atractivos descuentos. 

También se le permite crear una lista propia de películas y series favoritas y sugerirle una membresía con descuento al servicio de streaming que contenga la mayor parte del contenido seleccionado.


## ¿Cómo se benefician los usuarios?

Una de las mayores ventajas es que los usuarios ahorran tiempo y dinero debido a que la aplicación filtra el contenido evitando que se tenga que saltar entre plataformas, mostrando rápidamente en dónde se encuentra disponible, adicionalmente se le ofrecen descuentos para rentar, comprar o si el usuario así lo desea, adquirir una membresía para los servicios de streaming.

# Historias de usuario

## Pantalla de inicio, buscador y menú desplegable

El usuario visualizará una pantalla donde se le da la bienvenida y se explica de manera breve la función de la página. Al dar click en (X) se cerrará y el usuario podrá ver al centro de la página el logo del proyecto y una barra de búsqueda por título, director o año. 

### DOD
   
 - [x] En la pantalla de inicio, aparece la bienvenida (onload) y tiene la opción de cerrarla.
 - [x] La pantalla cuenta con un header donde aparece el nombre de la página y debajo se encuentra el buscador que filtra por título de película, serie o nombre del director.
 - [x] Al darle click en la lupa, te envía a la siguiente pantalla.

## Búsqueda específica de un elemento
 El usuario buscará un elemento específico que lo mandará a la siguiente pantalla donde le muestra la ficha técnica de la película o serie que eligió, así como un botón para agregarla a su lista de favoritos y las opciones disponibles para visualizarlo ya sea: Stream, Rent & Buy, indicando en qué plataformas se encuentra junto con el precio. 
Debajo se presentará una opción para obtener un descuento a las otras plataformas por usar la nuestra.

### DOD
   
 - [x] Se muestra el nombre de la película, rating, director, actores y poster. (ficha técnica)
 - [x] Debajo de la ficha, se encuentran las páginas alternativas donde puedes rentar, comprar o ver en stream.
 - [x] A un lado, aparecen los descuentos aplicables para las opciones de visualización.
 
## Obteniendo el descuento
Al dar click en el botón de descuento, se le mostrará al usuario una página de carga que presentará el logo del proyecto y el logo del servicio seleccionado, el porcentaje de ahorro y su código de promoción, que podrá usarse una sola vez y caducará en 48 hrs, además de un botón de (continuar) para redireccionarlo a la plataforma seleccionada.

### DOD
   
 - [x] Después de seleccionar la plataforma, muestra una página de espera donde menciona el descuento obtenido y a la p
 - [x]  En la página redireccionada, aparece directamente para que el usuario ingrese el cupón de descuento.
 

# Diseño de la interfaz

*Prototipo de baja fidelidad*
![Página de bienvenida](https://lh3.googleusercontent.com/q1VsgbprdmFUqnizndFGp1QEsW1CMTq1OJcAizKby4BUxuhaa0_zzClYakXcn9iTE9NaxmLBb-pzag "Bienvenida")
![Búsqueda](https://lh3.googleusercontent.com/yTYrla4AZxcyZuR_dhKUZHYbUTnwYX9438gQ-Cm4sIpTnRBa_6X_KtdKGoy1OUkVYML5NEpkFEqyqw "Búsqueda")
![enter image description here](https://lh3.googleusercontent.com/daQo2Q8CuWxM07nNDsr6tqREwxbfxoCU6yrGNrndrPAq6j8OS1G2ytiv6M3npSpLSeOMu2gBJ1pcWw "Resultado de película")
![enter image description here](https://lh3.googleusercontent.com/5hYBHL_nTaQXU36bV8c7jhO3tLKgYn-bGHFRHFhcQQBAGahEYMTSPVdwgSiRsIu-eh-rBQe_ilyeww "Redireccionando")
![enter image description here](https://lh3.googleusercontent.com/8Gdewypq6rgCVlV6iBxbL0jU1ig6ooKFUc5TwGXZCwEDTjUB2qavN61dWEJ53uUBRDSnHuu1fH5hsA "Página redireccionada")

*Prototipo de alta fidelidad*

En el siguiente enlace, se puede encontrar el diseño y el flujo de **No**. [Figma diseño](https://www.figma.com/file/Ysr7hqawNw7PinQ4fjHEbmeJ/Untitled?node-id=1%3A2)

# Testeos de usabilidad

El primer acercamiento con el consumido al usar la página, fue exitosa ya que entendió el propósito de esta: buscar una película, filtrarla por título, director o actor y al dar click, mostrarla en que plataformas se encuentra disponible para renta, compra o streaming junto con su respectivo precio. 

También comprendió que en caso de no contar con alguna membresía para ver la película que eligió, se le ofrece un descuento por usar nuestro sitio web para adquirir la membresía de su preferencia. 

Un comentario fue: ¿Qué pasaría si después de buscar 5 películas existiera una sección donde se fueran almacenando y al final, al entrar a dicha sección, recomendara cuál es la membresía que más me conviene? Por lo que sugirió agregar un botón de 'agregar a mi lista' para que esa sección (decidimos llamarla: My List) aparecieran las películas almacenadas junto con que membresía le conviene por el contenido que ha buscado.

# Distribuición del trabajo

## Día 1
 - Todas las integrantes: Xalex, Nathalie Share y Maribel, participamos en la lluvia de ideas para el producto así como el prototipado de baja fidelidad. 
 - Todas buscamos y recolectamos la data donde al encontrarla, Nathalie fue la que la concentró en un archivo usando fetch. 
 - Nos organizamos para la distribución de tareas donde: Share y Maribel realizaron las historias de usuario, DOD (siempre tomando en cuenta a sus demás compañeras); Xalex comenzó el prototipo de alta fidelidad y Natalie hizó la función de filtrado.
 - Todas aplicamos las encuestas para conocer la información que necesitábamos para nuestra página.

## Día 2

 - Nathalie y Share desarrollaron el HTML, CSS para la visualización de la página. Cada que tenían dudas, comentaban a Xalex y Maribel para encontrar la solución.
 - Maribel comenzó a redactar el README.
 -  Todas contribuimos a la redacción del pitch
 - Debido al feedback recibido nos dimos cuenta que debíamos modificar nuestro producto, por lo que se volvió a hacer las historias de usuario (Maribel, Share) Xalex comenzó el prototipo de alta fidelidad, Natalie hizo la barra de navegación, función de botones y el mensaje de bienvenida onload.
 - Se cambió el estilo, diseño y colores de la página (Xalex, Maribel) así como las funcionalidades(Nathalie, Share).

## Día 3
 - Todas contribuimos a los últimos ajustes de la página, principalemnte CSS, HTML (Share,Nathalie).
 - Pedimos feedback con el resto de nuestras compañeras sobre el producto final.
 - Xalex y Maribel prepararon el pitch.
 - Xalex y Nathalie practicaron el pitch para la presentación.