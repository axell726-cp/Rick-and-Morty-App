# Rick and Morty App

Una aplicación web construida con **React**, **Vite** y **Tailwind CSS** que permite explorar personajes de la serie *Rick and Morty*. La app incluye búsqueda, filtros por especie y estado, eliminación de personajes y paginación.

---

## 🔧 Tecnologías utilizadas

* **React 18** – Biblioteca de UI
* **Vite** – Bundler moderno para desarrollo rápido
* **Tailwind CSS** – Framework de CSS utilitario para estilos
* **Fetch API** – Para consumir la API de Rick and Morty
* **JavaScript (ES6+)**

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/axell726-cp/Rick-and-Morty-App.git
cd Rick-and-Morty-App
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en modo desarrollo:

```bash
npm run dev
```

4. Abrir en el navegador:

```
http://localhost:5173
```

---

## 🎯 Funcionalidades

* Mostrar personajes de Rick and Morty con su imagen, especie y estado.
* Búsqueda por nombre de personaje.
* Filtrar por especie (`Humano` o `Alien`) y por estado (`Vivo`, `Muerto`, `Desconocido`).
* Paginación para navegar entre las diferentes páginas de la API.
* Eliminar personajes de la vista.

---

## 🎨 Estilo y diseño

* **Colores:** combinación de gradientes suaves de azul, púrpura y rosa para fondos y botones.
* **Tipografía:** contraste alto entre texto y fondo para mejor legibilidad.
* **Interactividad:** animaciones de hover en tarjetas y botones.
* **Responsive:** el diseño se adapta a móviles, tablets y desktop.

---

## 📁 Estructura del proyecto

```
src/
 ├─ components/
 │   └─ CharacterCard.jsx   # Componente de cada tarjeta de personaje
 ├─ App.jsx                 # Componente principal
 ├─ App.css                 # Estilos globales (Tailwind)
 └─ main.jsx                # Punto de entrada

tailwind.config.js          # Configuración de Tailwind
vite.config.js              # Configuración de Vite
package.json                # Dependencias y scripts
README.md                   # Documentación
```

---
