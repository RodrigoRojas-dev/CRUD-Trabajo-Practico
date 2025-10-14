# CRUD API de Usuarios (Node.js + Express + Mongoose)

---

## Descripción

Este proyecto es una API RESTful simple para la gestión de recursos de usuarios (CRUD), construida como práctica de desarrollo backend. La API permite crear, leer, actualizar y eliminar usuarios utilizando un diseño de arquitectura de tres capas (Controladores, Servicios y Modelos).

## Tecnologías

* **Node.js**
* **Express:** Framework web.
* **TypeScript:** Para tipado estricto.
* **Mongoose:** ODM para interactuar con MongoDB.
* **MongoDB:** Base de datos NoSQL.
* **ts-node:** Para ejecución directa durante el desarrollo.
* **Bruno:** Cliente API utilizado para las pruebas.

## Configuración e Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd [NOMBRE_DEL_PROYECTO]
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar MongoDB:**
    Asegúrate de que tu instancia local de MongoDB esté corriendo en el puerto por defecto (`27017`).

4.  **Iniciar el Servidor:**
    ```bash
    npm run dev
    ```
    El servidor escuchará en `http://localhost:3000`.

---

## Endpoints de la API

| Método | Ruta | Descripción | Datos Requeridos (Body) |
| :--- | :--- | :--- | :--- |
| **GET** | `/users` | Obtiene la lista completa de todos los usuarios. | N/A |
| **GET** | `/users/:id` | Obtiene un usuario específico por su ID. | N/A |
| **POST** | `/users` | Crea un nuevo usuario en la base de datos. | `{ "name", "email", "password" }` |
| **PATCH** | `/users/:id` | Modifica uno o más campos de un usuario existente. | `{ "email" (opcional), "name" (opcional) }` |
| **DELETE** | `/users/:id` | Elimina un usuario de la base de datos por ID. | N/A |

---

## Pruebas con Bruno

Puedes probar todos los endpoints anteriores utilizando el cliente API **Bruno**.

1.  Crea una nueva petición en Bruno.
2.  Configura el Método (GET, POST, PATCH, DELETE) y la URL base (`http://localhost:3000`).