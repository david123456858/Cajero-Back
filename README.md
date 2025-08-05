# 🏧 Cajero Virtual Backend

Este proyecto simula el funcionamiento de un cajero automático (ATM) con Express.js y PostgreSQL, permitiendo registrar usuarios, iniciar sesión y retirar dinero con entrega simulada de billetes.

## Srack

- TypeScript
- Express.js
- PostgreSQL
- TypeORM
- Clean Architecture + DDD + Hexagonal

## 📊 Diagrama del flujo

```mermaid
graph TD;
    A[Usuario en Frontend] --> B[Registro: Número + Banco]
    B --> C[Backend Express (TS)]
    C --> D[Asignar tipo de banco: Nequi(0) / Bancolombia(1)]
    D --> E[Asignar dinero base]
    A --> F[Login: Teléfono + Contraseña]
    F --> G[Validación de contraseña (Estática/Dinámica)]
    G --> H[Acceso a Cajero Virtual]
    H --> I[Algoritmo de retiro de billetes]
    I --> J[Mostrar billetes al usuario]
    I --> K[Actualizar saldo en PostgreSQL]
```
Estructura de carptes 
```
└── 📁Back-Cajero
    
    └── 📁src
        └── 📁adapters
        └── 📁domain
        └── 📁Dtos
        └── 📁frameworks
        └── 📁repository
        └── 📁useCases
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── pnpm-lock.yaml
    ├── README.md
    └── tsconfig.json
```
