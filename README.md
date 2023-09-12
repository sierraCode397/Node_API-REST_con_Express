# Node_API-REST_con_Express

Esta es una API de ejemplo que proporciona datos relacionados con "Productos en un E-Commerce, asi como Categorias y usuarios.

## Rutas Disponibles

A continuación, se detallan las rutas disponibles en esta API junto con una breve descripción de su función:

### Obtener todos los productos

- **GET /api/v1/products**: Obtiene la lista de todos los productos disponibles.

### Obtener un producto por ID

- **GET /api/v1/products/:productId**: Obtiene un producto específico según su ID. Requiere un parámetro en la URL (`productId`) que debe ser el ID del producto que se desea obtener.

### Crear un nuevo producto

- **POST /api/v1/products**: Crea un nuevo producto en la base de datos. Se espera que envíes los datos del producto en el cuerpo de la solicitud.

### Actualizar un producto por ID (PATCH)

- **PATCH /api/v1/products/:id**: Actualiza parcialmente un producto existente según su ID. Requiere un parámetro en la URL (`id`) que debe ser el ID del producto que se desea actualizar. Se espera que envíes los datos que deseas actualizar en el cuerpo de la solicitud.

### Actualizar un producto por ID (PUT)

- **PUT /api/v1/products/:id**: Actualiza un producto existente por completo según su ID. Requiere un parámetro en la URL (`id`) que debe ser el ID del producto que se desea actualizar. Se espera que envíes los datos completos del producto en el cuerpo de la solicitud.

### Eliminar un producto por ID

- **DELETE /api/v1/products/:id**: Elimina un producto existente según su ID. Requiere un parámetro en la URL (`id`) que debe ser el ID del producto que se desea eliminar.

Estas rutas te permiten interactuar con la API para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los productos. Asegúrate de seguir las convenciones de la API en cuanto a métodos HTTP y parámetros requeridos para cada ruta.

## Dependencias

A continuación, se enumeran las dependencias utilizadas en este proyecto junto con una breve descripción de su funcionamiento:

- **@faker-js/faker** v8.0.2: Una biblioteca para generar datos de prueba falsos. Útil para crear datos de ejemplo.

- **@hapi/boom** v10.0.1: Proporciona funciones para generar respuestas de error HTTP con facilidad y consistencia.

- **cors** v2.8.5: Un middleware de Express que permite habilitar la política de mismo origen (CORS) en tu API.

- **express** v4.18.2: Un marco de aplicación web de Node.js que facilita la creación de API RESTful.

- **joi** v17.10.1: Una biblioteca para validar y gestionar la validación de datos en JavaScript. Muy útil para validar las solicitudes entrantes en tu API.

Puedes encontrar más información sobre estas dependencias en sus respectivas páginas de GitHub o en la documentación oficial de Node.js y npm.

## Scripts

Este proyecto incluye varios scripts que puedes ejecutar. A continuación, se describen los scripts disponibles:

- **dev**: Inicia el servidor en modo de desarrollo utilizando Nodemon para reiniciar automáticamente cuando se realizan cambios en el código.

- **start**: Inicia el servidor en modo de producción.

- **lint**: Ejecuta ESLint para verificar y corregir problemas de estilo en el código.

- **test**: Ejecuta pruebas unitarias o de integración. Puedes personalizar este script según tus necesidades específicas.


Asegúrate de tener Node.js y npm instalados en tu sistema antes de ejecutar estos scripts.

¡Gracias por tu interés en este proyecto! Espero que sea una experiencia interesante y satisfactoria. Si tienes alguna pregunta o necesitas ayuda



