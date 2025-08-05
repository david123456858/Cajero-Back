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
flowchart TD
    subgraph Domain_Layer
        D1[Entidades]
        D2[Reglas del dominio]
    end

    subgraph Application_Layer
        UC[Casos de uso]
    end

    subgraph Ports
        PR1[Entradas - Adapters]
        PR2[Salidas - Repository]
    end

    subgraph Infrastructure_Layer
        INF1[Controladores Express]
        INF2[TypeORM]
        INF3[PostgreSQL]
        INF4[Middlewares y servicios]
    end

    PR1 --> UC
    UC --> D1
    UC --> PR2
    PR2 --> INF2
    INF1 --> PR1
    INF2 --> INF3
    INF4 --> INF1
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


