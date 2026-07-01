# API REST de Productos

## Descripción

Esta aplicación consiste en una API REST desarrollada con **Node.js** y **Express**, utilizando **Firebase Firestore** como base de datos.

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de productos mediante solicitudes HTTP.

---

## Uso de la API

La API se encuentra desplegada en Vercel y puede utilizarse directamente mediante el siguiente dominio:

`https://proyecto-final-node-js-455c.vercel.app`

Todos los endpoints se encuentran bajo el prefijo `/api`, por lo que las solicitudes deben realizarse utilizando la siguiente estructura:

* Obtener todos los productos:

  ```
  GET https://proyecto-final-node-js-455c.vercel.app/api/products
  ```

* Obtener un producto por su ID:

  ```
  GET https://proyecto-final-node-js-455c.vercel.app/api/products/{id}
  ```

* Crear un producto:

  ```
  POST https://proyecto-final-node-js-455c.vercel.app/api/products
  ```

* Actualizar un producto:

  ```
  PUT https://proyecto-final-node-js-455c.vercel.app/api/products/{id}
  ```

* Eliminar un producto:

  ```
  DELETE https://proyecto-final-node-js-455c.vercel.app/api/products/{id}
  ```

Las solicitudes pueden realizarse desde herramientas como **Postman**, **Insomnia**, **Thunder Client** o cualquier cliente HTTP compatible.


---

## Tecnologías utilizadas

* Node.js
* Express.js
* Firebase Firestore
* Dotenv

---

## Estructura del proyecto

```
├── controllers/
├── services/
├── models/
├── routes/
├── data/
├── app.js
├── package.json
└── .env
```

El proyecto sigue una arquitectura por capas:

* **Routes:** definen los endpoints disponibles.
* **Controllers:** reciben las solicitudes HTTP y generan las respuestas.
* **Services:** contienen la lógica de negocio y actúan como intermediarios entre los controladores y el modelo.
* **Models:** realizan las operaciones sobre Firestore.
* **Data:** contiene la configuración y conexión con Firebase.

---

# Modelo de Producto

Cada producto contiene la siguiente información:

| Campo       | Tipo   | Descripción                                 |
| ----------- | ------ | ------------------------------------------- |
| id          | String | Identificador único generado por Firestore. |
| title       | String | Nombre del producto.                        |
| description | String | Descripción del producto.                   |
| category    | String | Categoría del producto.                     |
| image       | String | URL de la imagen del producto.              |
| price       | Number | Precio del producto.                        |

---

# Endpoints

## Obtener todos los productos

**GET**

```
/products
```

Respuesta:

```json
[
  {
    "id": "...",
    "title": "Notebook",
    "description": "...",
    "category": "Electrónica",
    "image": "...",
    "price": 1500
  }
]
```

---

## Obtener un producto por ID

**GET**

```
/products/:id
```

Respuesta exitosa:

```json
{
  "id": "...",
  "title": "Notebook",
  "description": "...",
  "category": "Electrónica",
  "image": "...",
  "price": 1500
}
```

Si el producto no existe:

```json
{
  "message": "Producto no encontrado"
}
```

---

## Crear un producto

**POST**

```
/products
```

Body:

```json
{
  "title": "Notebook",
  "description": "Notebook HP",
  "category": "Electrónica",
  "image": "https://...",
  "price": 1500
}
```

Si falta algún campo obligatorio, la API responderá:

```json
{
  "message": "Faltan campos obligatorios"
}
```

---

## Actualizar un producto

**PUT**

```
/products/:id
```

Body:

```json
{
  "title": "Notebook HP",
  "description": "16GB RAM",
  "category": "Electrónica",
  "image": "https://...",
  "price": 1800
}
```

Si el producto no existe:

```json
{
  "message": "Producto no encontrado"
}
```

---

## Eliminar un producto

**DELETE**

```
/products/:id
```

Respuesta:

```json
{
  "message": "Producto eliminado"
}
```

Si el producto no existe:

```json
{
  "message": "Producto no encontrado"
}
```

---

# Códigos de estado HTTP

| Código | Significado                        |
| ------ | ---------------------------------- |
| 200    | Operación realizada correctamente. |
| 201    | Recurso creado correctamente.      |
| 404    | Producto no encontrado.            |
| 422    | Faltan campos obligatorios.        |
| 500    | Error interno del servidor.        |

---

# Validaciones

La API verifica que todos los campos requeridos estén presentes al crear o actualizar un producto:

* title
* description
* category
* image
* price

En caso de faltar alguno de ellos, se devuelve un código **422 Unprocessable Entity**.

---

# Base de datos

La información se almacena en una colección de **Firebase Firestore** denominada:

```
products
```

Cada documento corresponde a un producto y posee un identificador único generado automáticamente por Firestore.

---

# Autor @valeriavmr

Proyecto desarrollado como práctica de una API REST utilizando Express y Firebase Firestore.
