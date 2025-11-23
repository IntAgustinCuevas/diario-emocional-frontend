<div align="center">

# 🎨 Diario Emocional · Frontend

**Frontend del proyecto Diario Emocional**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=20232A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.x-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

[Características](#-características) •
[Instalación](#-instalación-rápida) •
[Desarrollo](#-desarrollo) •
[Documentación](#-documentación)

</div>

---

## 🎯 Milestone actual: **M1 · SETUP**

> **Objetivo:** Configuración completa del entorno de desarrollo del frontend

Esta primera milestone establece la base del proyecto de interfaz de usuario:

- ✅ Proyecto React + Vite + TypeScript inicializado
- ✅ TailwindCSS configurado y funcionando
- ✅ ESLint + Prettier integrados para código limpio
- ✅ Hot reload funcionando perfectamente
- ✅ Estructura de componentes preparada
- 🔜 Listo para implementar la UI definitiva

> 📝 **Nota:** En M1 el foco es **entorno de desarrollo local**. El diseño definitivo de la UI y el despliegue a producción se trabajarán en milestones posteriores.

---

## ✨ Características

- ⚡ **Desarrollo ultra-rápido** con Vite HMR
- 🎨 **Estilos modernos** con TailwindCSS
- 📱 **Diseño responsive** desde el inicio
- 🔒 **Type-safe** con TypeScript
- 🧹 **Código limpio** con ESLint + Prettier
- 🚀 **Build optimizado** para producción
- 🔄 **Hot Module Replacement** para desarrollo ágil

---

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

| Herramienta | Versión mínima | Notas |
|------------|----------------|-------|
| **Node.js** | `>= 20.x` | [Descargar](https://nodejs.org/) |
| **npm** | `>= 9.x` | Incluido con Node.js |
| **Navegador** | - | Chrome, Firefox, Edge, Safari |

### Recomendado:

- **VS Code** con las siguientes extensiones:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

---

## 🚀 Instalación rápida

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/IntAgustinCuevas/diario-emocional-frontend.git
cd diario-emocional-frontend
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 4️⃣ Abrir en el navegador

El servidor se levantará en:

```
http://localhost:5173/
```

¡Listo! 🎉 El frontend está corriendo con hot reload activado.

---

## 🧩 Stack tecnológico

| Capa | Tecnología | Descripción |
|------|------------|-------------|
| **Bundler/Dev** | Vite 5.x | Dev server ultra-rápido + build optimizado |
| **UI Library** | React 18.x | Librería de componentes para interfaces |
| **Lenguaje** | TypeScript 5.x | Tipado estático, mejor DX |
| **Estilos** | TailwindCSS 3.x | Utility-first CSS framework |
| **Routing** | react-router-dom | Navegación entre vistas (M2+) |
| **Linting** | ESLint 9.x | Detección de problemas en el código |
| **Formatting** | Prettier 3.x | Formateo automático de código |

---

## 💻 Desarrollo

### Servidor de desarrollo

```bash
npm run dev
```

- **Hot Module Replacement (HMR):** Los cambios se reflejan instantáneamente
- **URL:** `http://localhost:5173/`
- **Puerto personalizado:** `npm run dev -- --port 3000`

### Build de producción

```bash
npm run build
```

Genera una carpeta `dist/` con los archivos optimizados para producción.

### Previsualizar build

```bash
npm run preview
```

Levanta un servidor local para probar el build de producción antes de deployar.

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala todas las dependencias |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta ESLint para detectar problemas |
| `npm run format` | Formatea el código con Prettier |

### 🔍 Calidad de código

```bash
# Revisar problemas de linting
npm run lint

# Formatear automáticamente todo el código
npm run format
```

> 💡 **Tip:** Configura tu editor para formatear automáticamente al guardar

---

## 🎨 TailwindCSS

### Configuración

TailwindCSS está completamente configurado y listo para usar:

```
tailwind.config.cjs    # Configuración de Tailwind
postcss.config.cjs     # Procesamiento PostCSS
src/index.css          # Estilos base + Tailwind
```

### Uso en componentes

```tsx
function Card() {
  return (
    <div className="p-6 rounded-xl bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold text-white mb-2">
        Título de la tarjeta
      </h2>
      <p className="text-slate-300">
        Descripción con estilos de Tailwind
      </p>
    </div>
  );
}
```

### Clases personalizadas

Si necesitas clases personalizadas, agregalas en `src/index.css`:

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors;
  }
}
```

### 📚 Recursos de Tailwind

- [Documentación oficial](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Heroicons](https://heroicons.com/) - Iconos oficiales

---

## 🧹 ESLint + Prettier

### ESLint

Detecta problemas en el código antes de que lleguen a producción:

```bash
# Revisar problemas
npm run lint

# Algunos problemas se pueden auto-arreglar
npm run lint -- --fix
```

### Prettier

Mantiene un formato consistente en todo el proyecto:

```bash
# Formatear todo el código
npm run format

# Ver qué archivos necesitan formateo
npm run format -- --check
```

### Configuración en VS Code

Crea `.vscode/settings.json` en la raíz del proyecto:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

## 📁 Estructura del proyecto

```
diario-emocional-frontend/
├── public/                # Archivos estáticos
│   └── vite.svg
├── src/
│   ├── assets/           # Imágenes, fuentes, etc.
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes UI básicos
│   │   └── layout/      # Componentes de layout
│   ├── pages/           # Páginas/Vistas principales
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Funciones de utilidad
│   ├── types/           # Definiciones de TypeScript
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales + Tailwind
├── .eslintrc.cjs        # Configuración ESLint
├── .prettierrc          # Configuración Prettier
├── tailwind.config.cjs  # Configuración Tailwind
├── tsconfig.json        # Configuración TypeScript
├── vite.config.ts       # Configuración Vite
└── package.json         # Dependencias y scripts
```

---

## 🔄 Flujo de trabajo completo

### Para desarrolladores que clonan el proyecto:

```bash
# 1. Clonar el repositorio
git clone https://github.com/IntAgustinCuevas/diario-emocional-frontend.git
cd diario-emocional-frontend

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173/
```

### Para agregar nuevos componentes:

```bash
# Crear un componente
src/components/Button.tsx

# Usar Tailwind para estilos
# Importar y usar en otros componentes

# Verificar código
npm run lint
npm run format
```

### Antes de hacer commit:

```bash
# Revisar y arreglar problemas
npm run lint
npm run format

# Probar que el build funciona
npm run build

# Commit
git add .
git commit -m "feat: agregar nuevo componente"
git push
```

---

## 🎨 Ejemplo de componente con TypeScript + Tailwind

```tsx
// src/components/EntryCard.tsx
interface EntryCardProps {
  title: string;
  content: string;
  emotion: 'happy' | 'sad' | 'anxious' | 'calm';
  date: Date;
}

export function EntryCard({ title, content, emotion, date }: EntryCardProps) {
  const emotionColors = {
    happy: 'bg-yellow-500',
    sad: 'bg-blue-500',
    anxious: 'bg-red-500',
    calm: 'bg-green-500'
  };

  return (
    <article className="p-6 rounded-xl bg-slate-800 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-4 h-4 rounded-full ${emotionColors[emotion]}`} />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-slate-300 mb-4 line-clamp-3">
        {content}
      </p>
      
      <time className="text-sm text-slate-400">
        {date.toLocaleDateString('es-AR')}
      </time>
    </article>
  );
}
```

---

## 🐛 Troubleshooting

### El servidor no inicia

**Problema:** Error al ejecutar `npm run dev`

**Solución:**
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Los estilos de Tailwind no se aplican

**Problema:** Las clases de Tailwind no tienen efecto

**Solución:**
1. Verifica que `index.css` importa Tailwind
2. Revisa que `tailwind.config.cjs` incluye tus archivos en `content`
3. Reinicia el servidor de desarrollo

### Errores de TypeScript

**Problema:** Errores de tipos en componentes

**Solución:**
```bash
# Verificar configuración
npx tsc --noEmit

# Si persiste, reiniciar el servidor TS del editor
# En VS Code: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Hot reload no funciona

**Problema:** Los cambios no se reflejan automáticamente

**Solución:**
1. Reinicia el servidor de desarrollo
2. Limpia el cache: `rm -rf node_modules/.vite`
3. Verifica que no haya errores en la consola del navegador

---

## 📚 Documentación adicional

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📝 Roadmap

- [x] **M1 - Setup:** Configuración inicial del proyecto
- [ ] **M2 - Routing:** Configuración de React Router
- [ ] **M3 - UI Components:** Biblioteca de componentes base
- [ ] **M4 - Integración API:** Conexión con el backend
- [ ] **M5 - Deploy:** Despliegue en Vercel/Netlify

---

## 👨‍💻 Autor

**Agustín Cuevas**

- GitHub: [@IntAgustinCuevas](https://github.com/IntAgustinCuevas)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

<div align="center">

**¿Encontraste un bug?** [Reportalo aquí](https://github.com/IntAgustinCuevas/diario-emocional-frontend/issues)

**¿Tienes una sugerencia?** [Abre un issue](https://github.com/IntAgustinCuevas/diario-emocional-frontend/issues/new)

⭐️ **¿Te gustó el proyecto? ¡Dale una estrella!**

</div>