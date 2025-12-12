🚀 BENODE-2025 – Proyecto Final Node.js + Firebase

API REST desarrollada con Node.js, Express, Firebase Firestore y JWT, cumpliendo con los requerimientos del proyecto final.
Permite gestionar productos mediante un CRUD protegido por autenticación con token.
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
