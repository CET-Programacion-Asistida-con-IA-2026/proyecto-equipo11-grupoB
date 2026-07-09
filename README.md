## Grupo B - Equipo 11
# Detecta la Verdad

## 📌 Descripción del proyecto

Detecta la Verdad es un sitio web educativo e interactivo que busca ayudar a adolescentes y jóvenes a identificar noticias falsas, imágenes manipuladas y contenidos engañosos que circulan en internet y redes sociales.

El proyecto surge ante la necesidad de fortalecer el pensamiento crítico y la alfabetización digital en un contexto donde gran parte de la información se consume a través de plataformas como TikTok, Instagram y portales de noticias.

Este proyecto se relaciona con los siguientes Objetivos de Desarrollo Sostenible:

- ODS 4: Educación de Calidad
- ODS 16: Paz, Justicia e Instituciones Sólidas

---

## 🚨 Problema

Actualmente los jóvenes reciben grandes cantidades de información todos los días, pero muchas veces no cuentan con herramientas para verificar si una noticia, imagen o video es verdadero.

La desinformación y las fake news pueden influir en opiniones, decisiones y comportamientos, generando confusión y propagando información incorrecta.

---

## 🎯 Público objetivo

- Adolescentes y jóvenes que utilizan internet y redes sociales de forma frecuente.
- Personas interesadas en aprender a detectar noticias falsas y verificar información antes de compartirla.

---

## 💡 Solución

La propuesta consiste en un sitio web interactivo de simulación.

La página muestra ejemplos similares a publicaciones reales de redes sociales para que las personas usuarias practiquen la identificación de señales de desinformación.

A través de ejemplos guiados, las personas usuarias aprenden a reconocer elementos como:

- Titulares sensacionalistas.
- Falta de fuentes confiables.
- Imágenes manipuladas o generadas con IA.
- Información fuera de contexto.

---

## ⚙️ Funcionalidades implementadas

### 1. Simulador de publicaciones

Carrusel interactivo con 3 publicaciones ficticias similares a las de una red social (imagen generada con IA, fuente desconocida y titular alarmista).

Se puede navegar entre publicaciones con flechas o con los indicadores, con una animación de transición tipo zoom.

### 2. Pistas interactivas

Al hacer clic sobre cada publicación se revela una pista que explica qué señal de alerta tiene ese contenido y por qué hay que desconfiar.

### 3. Sección "¿Qué son las Fake News?"

Explicación con estadísticas destacadas sobre el impacto de la desinformación.

### 4. Tips para detectar noticias falsas

Cuatro tarjetas con efecto flip (se dan vuelta al pasar el mouse o hacer foco) con consejos prácticos de verificación.

### 5. Formulario de contacto

Página dedicada (`contacto.html`) donde la persona usuaria puede reportar una posible fake news que encontró, cargando el link, la red social de origen y una descripción. El formulario valida los campos obligatorios y muestra una devolución con recomendaciones de verificación.

### 6. Diseño responsive

El sitio se adapta a distintos tamaños de pantalla (notebook, tablet y celular) mediante media queries.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (con animaciones, flexbox, grid y media queries)
- JavaScript (vanilla, sin librerías externas)

---

## 📂 Estructura del proyecto

```
├── index.html        → página principal (inicio, qué son las fake news, simulador, tips)
├── contacto.html      → formulario de reporte de posibles fake news
├── styles.css         → estilos generales del sitio
├── carrusel.js         → lógica del simulador (carrusel, pistas, scroll)
├── contacto.js         → lógica del formulario de contacto
└── README.md
```

---

## 🎨 Estado del proyecto

El sitio se encuentra funcional, con sus secciones principales implementadas: simulador interactivo, sección informativa, tips y formulario de contacto.

Como parte de la última iteración se separó el JavaScript en dos archivos (`carrusel.js` y `contacto.js`) para evitar conflictos entre páginas, se agregó la barra de navegación a la página de contacto, se sumaron mejoras de accesibilidad en el formulario, se limpió código CSS y se incorporó diseño responsive para celulares y tablets.

Próximos pasos: seguir puliendo el diseño visual y sumar más ejemplos al simulador de cara a la presentación final.

---
## Nuestro mood board
<img width="1366" height="768" alt="moodboard" src="https://github.com/user-attachments/assets/97b3217d-80e0-469c-8557-6f2acca27db3" />

---

## 👥 Equipo

- Acosta, Belen Carolina
- Rojas, Jana Alexia
- Masciotra Brea, Carolina Sol
- Crowder, Candela
- Sosa Orsi, Julieta
