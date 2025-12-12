# BENODE-2025 – Proyecto Final Node.js + Firebase

API REST desarrollada con **Node.js**, **Express**, **Firebase Firestore** y **JWT**.  
Permite gestionar productos mediante un CRUD básico protegido por autenticación por token.

---

## 🚀 Características Principales

- Login con usuario y contraseña  
- Generación de token **JWT**  
- Validación de token en rutas protegidas  
- CRUD de productos  
- Firebase Firestore como base de datos  
- Arquitectura modular (controllers, services, routes, middlewares)

---

## 🧪 Usuario de Prueba (Testing)

Puedes usar estas credenciales para probar la API:

- **User:** test@benode.com  
- **Password:** 123456  

---

## 📂 Estructura del Proyecto BENODE-2025

```text
BENODE-2025/
│
├── src/
│   ├── config/
│   │   └── firebase.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── products.controller.js
│   │
│   ├── middlewares/
│   │   └── verifyToken.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── products.routes.js
│   │
│   └── services/
│       └── products.service.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## 🔧 Instalación y Uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/Crist-And/BENODE-2025.git
cd BENODE-2025
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno  
Crear un archivo **.env** en la raíz:

```text
JWT_SECRET=miclaveultrasecreta
FIREBASE_PROJECT_ID=xxxx
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
xxxx
-----END PRIVATE KEY-----
"
FIREBASE_CLIENT_EMAIL=xxxx@xxxx.iam.gserviceaccount.com
PORT=3000
```

### 4. Iniciar el servidor

```bash
npm start
```

---

## 🔐 Endpoints Disponibles

### **Auth**
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/login` | Inicia sesión y devuelve un token |

---

### **Productos (Protegidos con Token)**

Agrega el header:

```
Authorization: Bearer TU_TOKEN
```

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/products` | Lista productos |
| POST | `/api/products` | Crea un producto |
| GET | `/api/products/:id` | Obtiene un producto |
| PUT | `/api/products/:id` | Actualiza un producto |
| DELETE | `/api/products/:id` | Elimina un producto |

---

## 🛠 Tecnologías Utilizadas

- Node.js  
- Express  
- Firebase Firestore  
- JWT  
- Nodemon (dev)  

---

## 📌 Notas Finales

Este proyecto fue desarrollado como práctica integral de backend moderno utilizando Node.js y Firebase.  
Estructurado con buenas prácticas y pensado para escalar.

---

## ✨ Autor

**Cristian Edgardo Andrada**  
GitHub: https://github.com/Crist-And

