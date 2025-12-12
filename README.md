# BENODE-2025

## 📦 Backend Node.js + Firebase (2025)

Proyecto estructurado para desarrollo backend modular, escalable y mantenible.

## 🚀 Tecnologías
- Node.js
- Express
- Firebase Admin SDK
- JWT
- Middlewares custom
- Arquitectura MVC simple

## 📂 Estructura
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

## ⚙️ Instalación
```bash
npm install
```

## ▶️ Ejecutar
```bash
npm run dev
```

## 🔐 Variables de entorno (.env)
```text
PORT=5000
FIREBASE_PROJECT_ID=...
FIREBASE_PRIVATE_KEY=...
FIREBASE_CLIENT_EMAIL=...
JWT_SECRET=supersecreto
```

## 🔑 Rutas

### Auth
- `POST /api/auth/login`
- `POST /api/auth/register`

### Productos
- `GET /api/products`
- `POST /api/products` (protegido)
- `PUT /api/products/:id` (protegido)
- `DELETE /api/products/:id` (protegido)

## 🧪 Middleware
- `verifyToken.js` → valida JWT

## 📦 Servicios
- Lógica desacoplada en `products.service.js`

## 📝 Notas
Proyecto listo para escalar y agregar módulos adicionales.
