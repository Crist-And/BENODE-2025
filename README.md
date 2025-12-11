BENODE-2025 – Proyecto Final Node.js + Firebase

API REST desarrollada con Node.js, Express, Firebase Firestore y JWT, cumpliendo con los requerimientos del proyecto final.
Permite gestionar productos a través de un CRUD básico protegido con autenticación por token.

📁 Estructura del Proyecto
BENODE-2025/
│── src/
│   ├── config/
│   │   └── firebase.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── products.controller.js
│   ├── middlewares/
│   │   └── verifyToken.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── products.routes.js
│   └── services/
│       └── products.service.js
│
│── .env
│── index.js
│── package.json
│── README.md

🔧 Tecnologías Utilizadas

Node.js + Express

Firebase Firestore (Base de datos NoSQL)

JWT (jsonwebtoken) para autenticación

CORS

body-parser

dotenv

⚙️ Instalación
1) Clonar el repositorio
git clone https://github.com/Crist-And/BENODE-2025
cd BENODE-2025

2) Instalar dependencias
npm install

3) Crear archivo .env
PORT=3000
JWT_SECRET=tu_secreto_jwt
FIREBASE_API_KEY=xxxx
FIREBASE_AUTH_DOMAIN=xxxx
FIREBASE_PROJECT_ID=xxxx
FIREBASE_STORAGE_BUCKET=xxxx
FIREBASE_MESSAGING_SENDER_ID=xxxx
FIREBASE_APP_ID=xxxx

4) Iniciar el servidor
npm start

🚀 Endpoints Disponibles
Autenticación
POST /auth/login

Genera un token JWT válido.

Body:
{
  "email": "test@correo.com",
  "password": "123456"
}

Respuesta:
{
  "token": "eyJhbGciOiJIUzI1..."
}

Productos
GET /api/products

Obtiene todos los productos.

GET /api/products/:id

Obtiene un producto por su ID.

POST /api/products

🔒 Requiere token JWT

Headers:

Authorization: Bearer TU_TOKEN_JWT


Body:

{
  "title": "Producto nuevo",
  "price": 1500
}

DELETE /api/products/:id

🔒 Requiere token JWT

Elimina un documento de Firestore.

🔐 Middleware: verifyToken

Valida el token JWT enviado en los headers.

🛠️ Servicios

Toda lógica de interacción con Firebase está en:

src/services/products.service.js


Incluye:

Obtener todos los productos

Obtener por ID

Crear producto

Eliminar producto

🧱 Manejo de Errores
✔️ Ruta inexistente (404)
{
  "error": "Ruta no encontrada"
}

✔️ Error interno (500)
{
  "error": "Error interno del servidor"
}

✔️ Token faltante o inválido

401: Token requerido

403: Token inválido

🔥 Firebase Firestore

La base de datos está estructurada bajo la colección:

products (collection)
   ├── id_1
   ├── id_2
   └── ...
