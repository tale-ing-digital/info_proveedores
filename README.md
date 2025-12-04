# Lineamientos para Proveedores - Tale Inmobiliaria

Módulo web interno que proporciona lineamientos, políticas y procedimientos para proveedores de Tale Inmobiliaria.

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 16 o superior
- npm 8 o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tale-ing-digital/info_proveedores.git
cd info_proveedores

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
suppliers-guidelines-module/
├── public/
│   ├── index.html              # HTML principal
│   └── assets/
│       ├── branding/           # Logo de Tale
│       └── icons/              # Iconografía
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── SectionHeader.tsx
│   │   ├── RequirementsGrid.tsx
│   │   ├── ProcessesSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── AccountsPolicySection.tsx
│   │   ├── SupportLineSection.tsx
│   │   └── index.ts
│   ├── pages/
│   │   └── SupplierGuidelinesPage.tsx
│   ├── theme/
│   │   └── theme.tsx           # Tema corporativo Tale
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Diseño

El módulo está diseñado para ser visualmente idéntico a [taleinmobiliaria.com](https://taleinmobiliaria.com):

- **Fondo**: Azul oscuro (#001845)
- **Acentos**: Cyan (#00c9ff)
- **Tipografía**: Montserrat
- **Componentes**: Material-UI (MUI) v5

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm start          # Servidor de desarrollo (puerto 3000)

# Producción
npm run build      # Build optimizado para producción

# Calidad de código
npm test           # Ejecutar tests
```

## 📦 Dependencias Principales

- **React** 18.2.0
- **TypeScript** 4.9.5
- **Material-UI** 5.14.0
- **Emotion** (CSS-in-JS)

## 🔧 Configuración

### Logo
Coloca el logo de Tale en: `public/assets/branding/logo-tale-horizontal.svg`

### Variables de entorno
Copia `.env.example` a `.env` y configura las variables necesarias.

## 📄 Licencia

© 2025 Tale Inmobiliaria - Uso interno
