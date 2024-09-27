
# Aplicacion Epayco 

Siguiendo los requerimientos solicitados se decidió trabajar con el STACK MERN (MONGODB - EXPRESS - REACT - NODE)

## Tecnologias

| App               | Tecnologia y paquetes | PUERTOS |
| ----------------- | ------------------------------------------------------------------ |--- |
| Service-one-db |  MONGODB - NODEJS - EXPRESS | 3001
| Service-two-backend | NODEJS - EXPRESS - JWT | 3002
| Service-three-client | NODEJS - REACT - VITE - TAILWIND | 5173 

- El puerto por defecto del MONGODB es 27017



## Instalacion y ejecucion

- Requisitos previos a la instalacion


### Instalacion mediante Docker

Antes de comenzar, asegúrate de tener instalado:

- Git: Puedes descargarlo desde git-scm.com.
- Un terminal (como Command Prompt, PowerShell, Terminal de macOS, o terminal de Linux).
- Docker: Puedes descargarlo desde docker.com.

1 - Usa el comando cd para cambiar al directorio donde deseas clonar el repositorio.

```bash
cd ruta/a/tu/carpeta
```

2 - Escribe el siguiente comando en tu terminal, reemplazando URL_DEL_REPOSITORIO con la URL que copiaste:


```bash
git clone https://github.com/Isaac12021991/epayco-mern.git
```
3 - Después de que el clon se complete, cambia a la carpeta del repositorio clonado:

```bash
cd epayco

```

4 - Posicionarse en la carpeta donde se encuentre el docker-compose.yml y ejecutar lo siguiente:
```bash
docker-compose up -d
```

### Instalacion sin Docker

Antes de comenzar, asegúrate de tener instalado:

- Git: Puedes descargarlo desde git-scm.com.
- Un terminal (como Command Prompt, PowerShell, Terminal de macOS, o terminal de Linux).
- Tener instalado MongoDB

1 - Usa el comando cd para cambiar al directorio donde deseas clonar el repositorio.

```bash
cd ruta/a/tu/carpeta
```

2 - Escribe el siguiente comando en tu terminal, reemplazando URL_DEL_REPOSITORIO con la URL que copiaste:


```bash
git clone https://github.com/Isaac12021991/epayco-mern.git
```
3 - Después de que el clon se complete, cambia a la carpeta del repositorio clonado:

```bash
cd epayco

```
- INSTALACION DE SERVICIO DE BASE DE DATOS | Service-one-db |


4 - Usa el comando cd para cambiar al directorio donde esta la aplicacion.

```bash
cd service-one-db
```

5 - Una vez dentro de la carpeta del proyecto, ejecuta el siguiente comando para instalar todas las dependencias definidas en el archivo package.json:

```bash
npm install
```

5 - Ejecutar aplicacion, script de inicio definido en el package.json. Para ejecutarlo, puedes usar::

```bash
npm start
```
Nota: la aplicacion debe de iniciar por defecto en el puerto 3001


- INSTALACION DE SERVICIO DE BACKEND | service-two-backend |

6 - Usa el comando cd para cambiar al directorio donde esta la aplicacion.

```bash
cd service-two-backend
```

7 - Una vez dentro de la carpeta del proyecto, ejecuta el siguiente comando para instalar todas las dependencias definidas en el archivo package.json:

```bash
npm install
```

8 - Ejecutar aplicacion, script de inicio definido en el package.json. Para ejecutarlo, puedes usar::

```bash
npm start
```
Nota: la aplicacion debe de iniciar por defecto en el puerto 3002

- INSTALACION DE SERVICIO DE FRONT  | Service-three-client |

6 - Usa el comando cd para cambiar al directorio donde esta la aplicacion.

```bash
cd service-three-client
```

7 - Una vez dentro de la carpeta del proyecto, ejecuta el siguiente comando para instalar todas las dependencias definidas en el archivo package.json:

```bash
npm install
```

8 - Ejecutar aplicacion, script de inicio definido en el package.json. Para ejecutarlo, puedes usar::

```bash
npm run dev
```
Nota: la aplicacion debe de iniciar por defecto en el puerto 5173, el comando --npm run dev-- permite realizar el inicio de la aplcacion del front sin tener un servicio instalado previamente.
## Variable de entornos

- Con docker:

En el repositorio previmiente clonano nos encontraremos las variables de entonos en la carpeta Config, que es un volumen que se copio automaticamente a las aplicaciones, si se necesita modificar una varible de ser donde esta la carpeta config del directorio principal

- Sin docker

Cada aplicacion tiene por defecto algunas variables de entornos para la ejecucion de cada una, si desea configurar un valor debe en la raiz de cada proyecto.


## Authors

- [@Isaac12021991](https://github.com/Isaac12021991)
Isaac Betancourt

