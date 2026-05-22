# Clon de Instagram con React y Typescript

Este proyecto es un clon de la interfaz web de Instagram adaptado con una temática de gatos. La aplicación consume imágenes reales de gatos desde una API externa, utiliza TypeScript y simula las interacciones y vistas dinámicas de Instagram.

* **Diseño de Figma de Referencia:** [Instagram Modern Web Design - Figma Community](https://www.figma.com/es-es/comunidad/file/1004033523744290376/instagram-modern-web-design)

---

## Arquitectura y Organización del Proyecto

El proyecto fue creado utilizando **React con TypeScript (`.tsx`)**. La estructura se organizó en la carpeta `src/`, separando las responsabilidades de los componentes visuales, los estilos, las APIs y el estado loxal.

### Estructura de Carpetas
```text
src/
├── assets/             
├── components/         
│   ├── Feed/
│   │   ├── Feed.css
│   │   └── Index.tsx   # Feed principal
│   ├── Header/
│   │   ├── Header.css
│   │   └── Index.tsx   # Barra superior de la aplicación
│   ├── Navbar/
│   │   ├── Navbar.css
│   │   └── Navbar.tsx  # Menú lateral de navegación
│   ├── Post/
│   │   ├── Post.css
│   │   └── Index.tsx   # Card individual de cada publicación
│   ├── PostModal/
│   │   ├── PostModal.css
│   │   └── Index.tsx   # Ventana emergente con el detalle del post
│   ├── Profile/
│   │   ├── Profile.css
│   │   └── Index.tsx   # Información y cabecera del usuario
│   └── StoryBar/
│       ├── StoryBar.css
│       └── Index.tsx   # Barra horizontal de historias simuladas
├── data/
│   └── user.ts         # Datos estáticos del usuario logueado emulado
├── services/
│   └── catApi.ts       # Configuración de Axios y peticiones a The Cat API
├── App.css             # Estilos generales
├── App.tsx             
└── main.tsx            

```

---

## Componentización

La aplicación se dividió en componentes y contenedores bajo el principio de **Responsabilidad Única**. Esta separación evita que se acumule la lógica en `App.tsx` y hace que se reutilice el  código.

* **`Header`**: Barra superior fija.
* **`Navbar`**: Menú lateral (Sidebar) encargado de gestionar los accesos principales.
* **`StoryBar`**: Renderiza la fila superior de historias.
* **`Feed`**: Actúa como contenedor del feed. Consume la API, manipula el array de datos y renderiza las publicaciones.
* **`Post`**: Representa una publicación individual. Tiene la lógica de los botones de interacción y aísla el comportamiento de cada publicación en el feed.
* **`Profile`**: Se utiliza tanto en tamaño reducido dentro de la Sidebar para indicar el usuario activo, como de forma expandida en la cabecera de la vista de perfil.
* **`PostModal`**: Ventana emergente de visualización detallada del post.

### Comunicación mediante Props

Los componentes se comunican mediante *props*:

1. **`Navbar`** recibe `currentView` y la función `setView` desde `App.tsx` para poder alterar la pantalla activa de la aplicación mediante callbacks de eventos de click.
2. **`PostModal`** recibe a través de sus `ModalProps` el objeto exacto de tipo `CatPost` seleccionado (`post`) y la función encargada de mutar el estado de cierre (`onClose`).

---

## Hooks

* **`useState` (`App.tsx`)**:
* `view`: Controla de forma condicional qué vista se debe mostrar en la pantalla principal (`'home'` o `'profile'`). Al ser un estado, agiliza la navegación instantánea sin necesidad de recargar el navegador.


* **`useState` (`Feed.tsx`)**:
* Almacena el listado de imágenes devuelto por el servicio web para poder iterarlas en el render.
* Almacena temporalmente la publicación activa (objeto `CatPost`) que el usuario seleccionó para abrir el modal de detalle.


* **`useEffect` (`Feed.tsx`)**:
* Ejecuta la petición asíncrona de Axios inmediatamente al armarse el componente en el DOM, garantizando que los datos de las publicaciones se recuperen una sola vez al cargar el inicio.



---

## Consumo de API

Para obtener las imágenes de las publicaciones integramos la biblioteca **Axios** conectada directamente con **The Cat API**. Para separar lo hicimos en `services/catApi.ts`:

```typescript
import axios from 'axios';

export interface CatPost {
   id: string;
   url: string;
}

export const fetchCatPosts = async (limit: number): Promise<CatPost[]> => {
   const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
   );
   return response.data;
};

```

---

## Funcionalidades Importantes

### 1. Visualización Individual de Publicaciones (`PostModal`)

Lo resolvimos implementando una ventana emergente **Modal** mediante un contenedor de posición fija (`position: fixed`) sobre la pantalla.

* El componente evita el *event bubbling* mediante `e.stopPropagation()` para que el modal no se cierre al interactuar con el interior del detalle.
* **Datos dinámicos integrados:** Extrae el ID único del gato (`post.id`) para componer nombres de usuario (`cat_lover_...`) y renderiza avatares automáticos usando el servicio de `pravatar.cc`.
* **Interfaz extendida:** Incluye descripción, contador estático de likes, comentarios (`Add a comment...`) y un set de iconos importados de `lucide-react` respetando el diseño de Instagram y del Figam.

### 2. Perfil de Usuario Emulado

Simulamos la existencia de una sesión de usuario activa bases de datos ni autenticación.

* **Datos Locales:** Toda la información (Nombre de usuario, biografía, foto de perfil, número de seguidores y seguidos) está en `src/data/user.ts`.
* **Navegación e Integración:** Desde la barra lateral, al hacer clic sobre el componente `<Profile />`, vamos a la vista general hacia la grilla del usuario, la cual despliega las publicaciones estáticas del perfil simulado puestas en una estructura de tres columnas.

---

```

```
