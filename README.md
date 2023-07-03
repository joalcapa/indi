Esta es una aplicación basada en Create React App. Te permite explorar podcasts utilizando Redux, navegación y componentes funcionales.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos en tu entorno de desarrollo:

- [Node.js](https://nodejs.org) (versión 12 o superior)
- [npm](https://www.npmjs.com/) (normalmente se instala junto con Node.js)

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona este repositorio en tu máquina local.

   ```bash
   git clone https://github.com/joalcapa/indi.git
   ```

2. Navega hasta el directorio del proyecto.

   ```bash
   cd indi
   ```

3. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

## Configuración

Antes de ejecutar la aplicación, necesitarás agregar un archivo `env.js` en la carpeta `config` con el siguiente contenido:

```javascript
export const ENV = 'local';

export const CORS_API = {
    local: "https://api.allorigins.win/get?url=", 
};

export const CORS_API_RAW = {
    local: "https://api.allorigins.win/raw?url=", 
};

export const API = {
    local: "https://itunes.apple.com", 
};

export const ENDPOINTS = {
    local: {
        podcasts: {
            get: {
                url: "/us/rss/toppodcasts/limit=100/genre=1310/json",
                method: "get",
            },
            getPodcast: {
                url: "/lookup?id=:id&country=US&media=podcast&entity=allPodcastEpisode&limit=20",
                method: "get",
            },
        },
    },
};
```

Asegúrate de que los valores de las URLs en el archivo `env.js` se ajusten a tus necesidades.

## Uso

Para ejecutar la aplicación en tu entorno de desarrollo local, utiliza el siguiente comando:

```bash
npm start
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador web, preferiblemente en Google Chrome.

## Recomendaciones adicionales

Es importante mencionar que aunque Create React App ya no se recomienda como herramienta inicial para proyectos React, se sugiere considerar alternativas como Next.js, Gatsby u otras opciones, ya que ofrecen beneficios adicionales para aplicaciones más complejas.

Sin embargo, he decidido utilizar Create React App en este caso particular para demostrar mis habilidades con Redux, navegación y componentes funcionales.
```