# Módulo de Lineamientos para Proveedores - Tale Inmobiliaria

Módulo React especializado para presentar lineamientos, procesos y soporte para proveedores de Tale Inmobiliaria. Construido con **React 18**, **Material-UI (MUI)**, y **TypeScript** para garantizar máxima calidad de código y adherencia a los lineamientos corporativos de branding.

---

## 📋 Descripción General

Este módulo proporciona una interfaz profesional y responsiva para:

- **Presentación de requisitos** para proveedores (documentos, políticas, cumplimiento)
- **Guía de procesos operativos** (Acceso, Facturación, Pagos, Soporte)
- **Preguntas frecuentes** en formato acordeón estilo Tale Inmobiliaria
- **Contactos y soporte** con información de horarios y canales de comunicación

El diseño sigue exactamente los lineamientos corporativos definidos en `Lineamientos.md`, incluyendo:
- Paleta de colores corporativos (Azul profundo #003b70 como primario)
- Tipografía jerárquica con mayúsculas en títulos principales
- Cards blancas con sombras sutiles y espaciado generoso
- Layout responsivo desktop/mobile
- Componentes reutilizables y bien documentados

---

## 🎯 Estructura del Proyecto

```
suppliers-guidelines-module/
├── public/
│   ├── index.html              # Archivo HTML principal
│   └── assets/
│       └── icons/              # Iconografía personalizada (futura)
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── SectionHeader.tsx   # Encabezados de sección
│   │   ├── InfoCard.tsx        # Cards de información
│   │   ├── ProcessStepList.tsx # Listas de pasos numerados/bulleted
│   │   ├── FAQAccordion.tsx    # Acordeón para preguntas frecuentes
│   │   ├── ContactBlock.tsx    # Bloque de contacto y soporte
│   │   └── index.ts            # Exportación de componentes
│   ├── pages/
│   │   └── SupplierGuidelinesPage.tsx  # Página principal del módulo
│   ├── theme/
│   │   └── theme.ts            # Configuración de MUI + estilos corporativos
│   ├── types/                  # Definiciones de tipos TypeScript (futura)
│   ├── App.tsx                 # Componente raíz
│   └── index.tsx               # Punto de entrada
├── package.json                # Dependencias y scripts
├── tsconfig.json               # Configuración de TypeScript
├── .env.example                # Variables de entorno de ejemplo
├── .gitignore                  # Archivos ignorados por git
└── README.md                   # Este archivo
```

---

## 🛠️ Requisitos Previos

- **Node.js**: v16.0.0 o superior
- **npm**: v8.0.0 o superior (o yarn/pnpm como alternativa)
- **Git**: para control de versiones

---

## 📦 Instalación

### 1. **Clonar o descargar el repositorio**

```bash
cd "c:\Users\lmachaca\Documents\Projects\web proveedores\suppliers-guidelines-module"
```

### 2. **Instalar dependencias**

```bash
npm install
```

O si prefieres usar **yarn**:

```bash
yarn install
```

O con **pnpm**:

```bash
pnpm install
```

### 3. **Configurar variables de entorno**

Copia el archivo `.env.example` a `.env`:

```bash
copy .env.example .env
```

Luego edita `.env` con tus valores específicos:

```
REACT_APP_API_BASE_URL=https://api.taleinmobiliaria.com
REACT_APP_ENVIRONMENT=development
REACT_APP_SUPPORT_EMAIL=soporte@taleinmobiliaria.com
REACT_APP_ADMIN_EMAIL=administracion@taleinmobiliaria.com
```

---

## 🚀 Scripts Disponibles

### **Iniciar desarrollo**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. La página se recargará automáticamente cuando hagas cambios en el código.

### **Compilar para producción**

```bash
npm run build
```

Compila el proyecto para producción en la carpeta `build/`. Optimizado para mejor rendimiento.

### **Ejecutar pruebas**

```bash
npm test
```

Inicia el corredor de pruebas en modo interactivo.

### **Linting (verificar código)**

```bash
npm run lint
```

Verifica el código contra las reglas de ESLint configuradas.

### **Formatear código**

```bash
npm run format
```

Formatea automáticamente el código usando Prettier según estándares corporativos.

---

## 📚 Dependencias Principales

### **Dependencias de Producción**

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `react` | ^18.2.0 | Librería UI principal |
| `react-dom` | ^18.2.0 | Renderizado en DOM |
| `@mui/material` | ^5.14.0 | Componentes de UI corporativos |
| `@mui/icons-material` | ^5.14.0 | Iconografía |
| `@emotion/react` | ^11.11.0 | Motor de estilos CSS-in-JS |
| `@emotion/styled` | ^11.11.0 | Componentes estilizados |
| `react-router-dom` | ^6.15.0 | Enrutamiento (futuro) |
| `axios` | ^1.5.0 | Cliente HTTP para API |

### **Dependencias de Desarrollo**

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `typescript` | ^5.2.0 | Tipado estático |
| `@types/react` | ^18.2.0 | Tipos para React |
| `@types/react-dom` | ^18.2.0 | Tipos para React DOM |
| `@types/node` | ^20.0.0 | Tipos para Node.js |
| `react-scripts` | 5.0.1 | Scripts de compilación |
| `eslint` | ^8.49.0 | Linter de código |
| `prettier` | ^3.0.0 | Formateador de código |
| `@typescript-eslint/eslint-plugin` | ^6.0.0 | Reglas ESLint para TypeScript |
| `@typescript-eslint/parser` | ^6.0.0 | Parser de TypeScript para ESLint |

---

## 🎨 Configuración de Tema y Branding

El archivo `src/theme/theme.ts` contiene la configuración completa del tema MUI alineada con los lineamientos corporativos:

### **Colores Corporativos**

```typescript
primary.main:    '#003b70'  // Azul profundo corporativo
secondary.main:  '#5DADE2'  // Azul claro/celeste suave
text.primary:    '#1A1A1A'  // Gris muy oscuro casi negro
text.secondary:  '#666666'  // Gris medio
divider:         '#E8E8E8'  // Gris muy claro
```

### **Tipografía**

- **H1**: 3.5rem, uppercase, bold
- **H2**: 2.5rem, uppercase, bold (títulos de sección)
- **H3**: 1.75rem, bold (subtítulos)
- **H4**: 1.25rem, bold (subtítulos en cards)
- **Body**: 1rem, line-height: 1.6

### **Bordes y Espaciado**

- **Border Radius**: 8px (discreto, no redondeado excesivamente)
- **Card Shadows**: Sombras sutiles (0 2px 8px rgba)
- **Spacing**: Márgenes verticales generosos entre secciones

Para modificar el tema, edita `src/theme/theme.ts` directamente. Todos los componentes heredan automáticamente los estilos.

---

## 📦 Componentes Principales

### **SectionHeader**

Encabezado de sección con label, título y descripción opcional.

```tsx
<SectionHeader
  label="MÓDULO INTERNO"
  title="Lineamientos para Proveedores"
  description="Estos lineamientos te ayudarán..."
  alignment="left"
/>
```

### **InfoCard**

Card versátil para mostrar información con ícono, título y listado de items.

```tsx
<InfoCard
  icon={<DocumentIcon />}
  title="Documentos Obligatorios"
  items={['Factura digital', 'XML', 'OC/OS aprobada']}
  variant="elevated"
/>
```

### **ProcessStepList**

Lista de pasos numerados o con bullets para procesos.

```tsx
<ProcessStepList
  title="Acceso y habilitación"
  steps={[
    'El acceso lo otorga tu cliente...',
    'El correo de bienvenida...',
  ]}
  variant="bulleted"
/>
```

### **FAQAccordion**

Acordeón para preguntas frecuentes estilo Tale Inmobiliaria.

```tsx
<FAQAccordion
  items={[
    {
      question: '¿Quién me habilita?',
      answer: 'Tu cliente lo hace desde...',
      details: ['Opción 1', 'Opción 2'],
    },
  ]}
  defaultExpanded={null}
/>
```

### **ContactBlock**

Bloque de contacto con información y botón de acción.

```tsx
<ContactBlock
  title="Soporte y Contacto"
  description="Si tienes dudas..."
  contacts={[
    { icon: <EmailIcon />, label: 'Email', value: 'soporte@...' },
  ]}
  primaryButtonLabel="Ir al Portal"
  primaryButtonUrl="https://..."
/>
```

---

## 🔧 Configuración de TypeScript

El archivo `tsconfig.json` incluye path aliases para facilitar importaciones:

```typescript
// En lugar de:
import { SectionHeader } from '../../../components/SectionHeader';

// Usa:
import { SectionHeader } from '@components';
import { SupplierGuidelinesPage } from '@pages';
import { taleTheme } from '@theme/theme';
```

Los aliases disponibles son:
- `@components/*` → `src/components/*`
- `@pages/*` → `src/pages/*`
- `@theme/*` → `src/theme/*`
- `@types/*` → `src/types/*`
- `@/*` → `src/*`

---

## 🧪 Testing

Para agregar tests, crea archivos con extensión `.test.tsx`:

```typescript
// src/components/__tests__/SectionHeader.test.tsx
import { render, screen } from '@testing-library/react';
import { SectionHeader } from '../SectionHeader';
import { TaleThemeProvider } from '@theme/theme';

test('renders section header', () => {
  render(
    <TaleThemeProvider>
      <SectionHeader label="Test" title="Test Title" />
    </TaleThemeProvider>
  );
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});
```

Luego ejecuta:

```bash
npm test
```

---

## 📱 Responsividad

El módulo está completamente optimizado para:

- **Desktop** (>1200px): Grid de 2 columnas para cards
- **Tablet** (600-1200px): Grid de 1-2 columnas según espacio
- **Mobile** (<600px): Stack vertical completo

Todos los breakpoints de MUI están configurados automáticamente en los componentes.

---

## 🌐 Despliegue

### **A Vercel (Recomendado)**

```bash
npm install -g vercel
vercel
```

### **A GitHub Pages**

```bash
npm run build
# Cambia "homepage" en package.json si es necesario
git add .
git commit -m "Build for production"
git push
```

### **A un servidor tradicional**

1. Ejecuta `npm run build`
2. Copia la carpeta `build/` a tu servidor web
3. Configura las rutas del servidor para servir `index.html` en todas las rutas

---

## 📝 Mejoras Futuras

- [ ] Agregar más secciones dinámicas
- [ ] Integrar con API backend para obtener datos
- [ ] Agregar animaciones suaves
- [ ] Implementar dark mode
- [ ] Agregar internacionalización (i18n)
- [ ] Tests unitarios completos
- [ ] Integración con CMS (WordPress API)

---

## 🤝 Contribución

Para contribuir al módulo:

1. Crea una rama: `git checkout -b feature/nombre-feature`
2. Realiza cambios y commit: `git commit -am 'Agrega feature'`
3. Push a la rama: `git push origin feature/nombre-feature`
4. Abre un Pull Request

---

## 📄 Licencia

Propiedad de **Tale Inmobiliaria**. Uso interno únicamente.

---

## 📞 Soporte

Para dudas o problemas técnicos:

- **Email**: soporte@taleinmobiliaria.com
- **Horario**: Lun–Vie, 9:00–18:00

---

## 📚 Referencias

- [Documentación oficial de React 18](https://react.dev)
- [Material-UI Documentation](https://mui.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- `Lineamientos.md` - Requerimientos de branding y estilo corporativo

---

**Última actualización**: Diciembre 2025  
**Versión**: 1.0.0
