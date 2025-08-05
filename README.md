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
    subgraph Domain Layer
        D1[Entidades]
        D2[Reglas del dominio]
    end

    subgraph Application Layer
        UC[Use Cases]
    end

    subgraph Ports
        PR1[Puertos de entrada (adapters)]
        PR2[Puertos de salida (repository interfaces)]
    end

    subgraph Infrastructure Layer
        INF1[Express Controllers]
        INF2[ORM (TypeORM)]
        INF3[PostgreSQL]
        INF4[Middlewares, Encriptación, etc.]
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
