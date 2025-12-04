# 🎨 Refactorización Completa - Módulo Lineamientos para Proveedores

## ✅ Cambios Implementados

### 1️⃣ **Tema Corporativo Tale (theme.tsx)**

**Colores actualizados:**
- Fondo principal: `#001f6b` (azul profundo corporativo)
- Fondo de cards: `#ffffff` (blanco)
- Color primario: `#001f6b` (azul Tale)
- Color secundario: `#5DADE2` (azul claro)
- Texto en fondo azul: `#ffffff` (blanco)
- Texto en cards: `#1A1A1A` y `#666666`

**Tipografía:**
- Fuente: `Montserrat` (ya configurada en public/index.html)
- H1: 3.5rem, uppercase, bold, color blanco
- H2: 2.5rem, uppercase, bold, color blanco
- H3: 1.75rem, bold, color azul (para cards)
- H4: 1.25rem, uppercase, bold

**Componentes MUI:**
- Cards: bordes redondeados 16px, sombras elegantes, hover con elevación
- Botones: uppercase, padding generoso, sombras corporativas
- Acordeones: fondo blanco, bordes redondeados, sin líneas divisorias
- Links: color azul claro #5DADE2, hover con underline

---

### 2️⃣ **Componentes Refactorizados**

#### **SectionHeader.tsx**
- Chip con borde azul claro y fondo semi-transparente
- Títulos en blanco sobre fondo azul
- Descripción en blanco con 90% opacidad
- Responsive con tamaños adaptativos

#### **RequirementsGrid.tsx**
- Grid 2x2 (2 columnas en desktop, 1 en móvil)
- Cards blancas con iconos en círculos con fondo azul claro
- Títulos uppercase en azul corporativo
- Lista de items con bullets azul claro
- Padding generoso (2rem)

#### **ProcessesSection.tsx**
- Grid 2x2 responsive
- Cards blancas con títulos uppercase
- Bordes inferiores en títulos (#f0f0f0)
- Iconos azul claro
- Altura completa en todas las cards

#### **FaqSection.tsx**
- Acordeones blancos sobre fondo azul
- Iconos de pregunta en círculos azul claro
- Hover con fondo gris claro
- Detalles con fondo #fafafa
- Espaciado generoso

#### **AccountsPolicySection.tsx** (Sección 02)
- Card blanca con título "Sección 02" en azul claro
- Título principal uppercase en azul corporativo
- Descripción del documento
- Link con icono de documento
- Hover con borde azul y desplazamiento suave
- Texto del enlace: "ADM-POL-05 Política de cuentas por pagar"
- Subtexto: "Ver documento →"

#### **SupportLineSection.tsx** (Sección 03)
- Card blanca con título "Sección 03" en azul claro
- Título principal uppercase en azul corporativo
- Descripción del canal de soporte
- Link con icono de agente de soporte
- Hover con borde azul y desplazamiento suave
- Texto del enlace: "Formulario de soporte técnico"
- Subtexto: "Microsoft Forms →"

#### **SupportAndContactSection.tsx**
- Card blanca grande con sombra profunda
- Título centrado en azul corporativo uppercase
- 3 bloques de contacto en grid responsive
- Cada bloque con icono en círculo azul claro
- Botón grande azul claro con icono de lanzamiento
- Hover con elevación y sombra aumentada

---

### 3️⃣ **Página Principal (SupplierGuidelinesPage.tsx)**

**Estructura completa:**
```
1. Logo de Tale (con placeholder)
2. Hero Section - "Lineamientos para Proveedores"
3. Sección 01 - Requisitos Generales (4 cards)
4. Procesos Operativos (4 cards en grid 2x2)
5. Sección 02 - Política de cuentas por pagar (card con link)
6. Sección 03 - Soporte técnico (card con link)
7. FAQ - Preguntas Frecuentes (5 acordeones)
8. Soporte y Contacto (card final con botón)
```

**Fondo:**
- Background: `#001f6b` (azul profundo en toda la página)
- Container máximo: 1200px (lg)
- Padding vertical: 3rem

---

### 4️⃣ **Logo Corporativo**

**Ubicación esperada:**
```
public/assets/branding/logo-tale-horizontal.svg
```

**Configuración:**
- Altura: 70px
- Filtro CSS: `brightness(0) invert(1)` (convierte a blanco)
- Fallback: Si no existe, se oculta automáticamente
- Ver instrucciones completas en: `public/assets/branding/LOGO_PLACEHOLDER.txt`

**Alternativas:**
- Puedes usar PNG con transparencia
- Si el logo ya es blanco, elimina el filtro CSS

---

## 📦 Dependencias Necesarias

### ✅ **YA INSTALADAS** (verificado en package.json)

```bash
# Dependencias de producción
✅ @mui/material@^5.14.0
✅ @mui/icons-material@^5.14.0
✅ @emotion/react@^11.11.0
✅ @emotion/styled@^11.11.0
✅ react@^18.2.0
✅ react-dom@^18.2.0
✅ react-router-dom@^6.15.0
✅ axios@^1.5.0

# Dependencias de desarrollo
✅ typescript@^4.9.5
✅ @types/react@^18.2.0
✅ @types/react-dom@^18.2.0
✅ @types/node@^20.0.0
✅ react-scripts@5.0.1
✅ eslint@^8.49.0
✅ prettier@^3.0.0
```

### ✅ **Google Fonts Montserrat**

Ya configurado en `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### ❌ **NO SE REQUIERE INSTALAR NADA ADICIONAL**

Todas las dependencias necesarias ya están instaladas y configuradas.

---

## 🎯 Características del Diseño

### **Estilo Visual 100% Tale**
- ✅ Fondo azul profundo corporativo
- ✅ Cards blancas con sombras elegantes
- ✅ Tipografía Montserrat con pesos variados
- ✅ Títulos uppercase y bold
- ✅ Colores corporativos consistentes
- ✅ Espaciado generoso y profesional
- ✅ Hover states suaves y elegantes
- ✅ Responsive completo
- ✅ Iconografía Material UI integrada

### **Componentes Reutilizables**
- ✅ SectionHeader (para títulos de sección)
- ✅ RequirementsGrid (grid de requisitos)
- ✅ ProcessesSection (procesos operativos)
- ✅ FaqSection (acordeones FAQ)
- ✅ AccountsPolicySection (Sección 02 corregida)
- ✅ SupportLineSection (Sección 03 corregida)
- ✅ SupportAndContactSection (contacto y soporte)

### **Secciones 02 y 03 Corregidas**

**Sección 02 - Política de cuentas por pagar:**
- Título: "Sección 02 / Política de cuentas por pagar TALE"
- Link: ADM-POL-05 con icono de documento
- URL: SharePoint (completa y funcional)
- Diseño: Card blanca con hover azul

**Sección 03 - Soporte técnico:**
- Título: "Sección 03 / Línea directa – Soporte técnico"
- Link: Formulario Microsoft Forms
- URL: Forms (completa y funcional)
- Diseño: Card blanca con hover azul

---

## 🚀 Comandos de Ejecución

### **Desarrollo**
```powershell
cd "c:\Users\lmachaca\Documents\Projects\web proveedores\suppliers-guidelines-module"
npm run dev
```

### **Producción**
```powershell
npm run build
```

### **Limpiar caché**
```powershell
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue
npm run dev
```

---

## 📁 Archivos Modificados

```
✅ src/theme/theme.tsx
✅ src/components/SectionHeader.tsx
✅ src/components/RequirementsGrid.tsx
✅ src/components/ProcessesSection.tsx
✅ src/components/FaqSection.tsx
✅ src/components/AccountsPolicySection.tsx
✅ src/components/SupportLineSection.tsx
✅ src/components/SupportAndContactSection.tsx
✅ src/pages/SupplierGuidelinesPage.tsx
✅ public/assets/branding/LOGO_PLACEHOLDER.txt (nuevo)
```

---

## 🎨 Paleta de Colores Corporativa

```css
/* Azul profundo corporativo (fondo principal) */
#001f6b

/* Azul claro corporativo (acciones, hover, iconos) */
#5DADE2

/* Azul oscuro (hover de botones) */
#3498db

/* Blanco (cards y texto sobre azul) */
#ffffff

/* Texto oscuro (en cards blancas) */
#1A1A1A

/* Texto secundario */
#666666 y #555555

/* Fondos sutiles */
#f8f9fa (gris muy claro)
#e3f2fd (azul muy claro para hover)
```

---

## ✨ Próximos Pasos

1. **Colocar el logo de Tale:**
   - Guarda el logo en: `public/assets/branding/logo-tale-horizontal.svg`
   - El logo se mostrará automáticamente en blanco sobre el fondo azul

2. **Verificar en el navegador:**
   - El fondo debe ser azul profundo (#001f6b)
   - Todas las cards deben ser blancas
   - Los títulos principales deben estar en blanco
   - Los títulos de cards en azul corporativo

3. **Ajustes opcionales:**
   - Si deseas cambiar colores, edita `src/theme/theme.tsx`
   - Para modificar espaciados, ajusta los valores de `marginY` en cada componente

---

## 📞 Soporte

Si el proyecto no se ve como se espera:
1. Limpia la caché: `Remove-Item -Recurse -Force node_modules\.cache`
2. Reinicia el servidor: `npm run dev`
3. Refresca el navegador con Ctrl + F5 (hard refresh)

---

**✅ Refactorización completada con éxito**

El módulo ahora está 100% alineado al estilo corporativo de Tale Inmobiliaria.
