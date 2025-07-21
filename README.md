💬 Aplicación de Chat en Tiempo Real (realtime-chat)
Este proyecto implementa una aplicación de chat simple en tiempo real utilizando NestJS para el backend (con WebSockets) y HTML/JavaScript puro para el frontend. Permite a múltiples usuarios conectarse y enviar mensajes que se difunden instantáneamente a todos los participantes.

🚀 Tecnologías Utilizadas
NestJS: Un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables.

WebSockets (@nestjs/platform-socket.io y socket.io): Permiten la comunicación bidireccional en tiempo real entre el servidor y los clientes.

Socket.IO: Una librería para aplicaciones de chat en tiempo real, que facilita la comunicación WebSocket.

HTML/CSS/JavaScript (Frontend): Tecnologías web estándar para la interfaz de usuario del cliente del chat.

📡 Detalles del Servicio
Rol: Provee la funcionalidad de chat en tiempo real, gestionando las conexiones de clientes y la difusión de mensajes.

Puerto de Escucha del Backend (NestJS): 3002

Frontend: Un archivo HTML estático que se conecta al backend del chat.

📦 Estructura del Proyecto
El proyecto sigue una estructura modular típica de NestJS, con un módulo específico para la lógica del chat. El frontend se encuentra en una carpeta separada.

realtime-chat/
├── src/
│   ├── main.ts                   # Punto de entrada de la aplicación NestJS.
│   ├── app.module.ts             # Módulo principal de la aplicación.
│   ├── app.controller.ts         # Controlador de ejemplo (Hello World).
│   ├── app.service.ts            # Servicio de ejemplo.
│   └── chat/
│       ├── chat.module.ts        # Módulo del chat.
│       ├── chat.gateway.ts       # Gateway WebSocket para la lógica del chat.
│   └── Front/
│       └── index.html            # Interfaz de usuario del cliente de chat.
├── package.json
└── tsconfig.json
└── ...otros archivos de configuración
⚙️ Funcionalidades del Chat
Este servicio expone las siguientes funcionalidades a través de WebSockets:

connect (Evento interno de Socket.IO): Se activa cuando un cliente se conecta al servidor. El servidor notifica a todos los usuarios.

disconnect (Evento interno de Socket.IO): Se activa cuando un cliente se desconecta del servidor. El servidor notifica a todos los usuarios.

chatMessage (Evento del cliente al servidor): Un cliente envía un mensaje. El servidor lo recibe y lo reenvía (emite) a todos los clientes conectados.

Payload Esperado: string (el contenido del mensaje).

Retorno (a todos los clientes): { senderId: string, message: string }.

userConnected (Evento del servidor al cliente): Notificación de que un nuevo usuario se ha unido.

userDisconnected (Evento del servidor al cliente): Notificación de que un usuario ha abandonado el chat.

🚀 Cómo Poner en Marcha la Aplicación
Sigue estos pasos para configurar y ejecutar la aplicación de chat en tu entorno de desarrollo.

Prerrequisitos
Asegúrate de tener instalados los siguientes componentes:

Node.js (versión 16.x o superior recomendada) y npm.

NestJS CLI (instalado globalmente: npm i -g @nestjs/cli).

Configuración del Entorno
Navegar al Directorio del Proyecto:
Abre tu terminal y navega al directorio raíz del proyecto realtime-chat.

Bash

cd realtime-chat
Instalar Dependencias del Proyecto:
Instala todas las librerías necesarias:

Bash

npm install
Si no están instaladas, podrías necesitar:

Bash

npm install @nestjs/platform-socket.io socket.io socket.io-client
Iniciar el Backend (Servidor NestJS)
Una vez configurado todo lo anterior, para levantar el backend del chat:

Bash

npm run start:dev
Deberías ver un mensaje en tu consola indicando que la aplicación está escuchando en el puerto 3002.

Abrir el Frontend (Cliente del Chat)
Mientras el backend de NestJS está corriendo:

Abre el archivo src/Front/index.html directamente en tu navegador web preferido (Chrome, Firefox, etc.). Puedes hacerlo arrastrando el archivo al navegador o haciendo doble clic en él en tu explorador de archivos.

Asegúrate de que la URL de conexión en index.html sea correcta. Dentro de index.html, la línea const socket = io('http://localhost:3000'); debe apuntar al puerto donde tu servidor NestJS está escuchando, que en este caso es 3002.

CORRECCIÓN NECESARIA EN src/Front/index.html:
Busca esta línea:

HTML

<script>
    const socket = io('http://localhost:3000'); // Asegúrate que coincide con el puerto de NestJS
Y cámbiala a:

HTML

<script>
    const socket = io('http://localhost:3002'); // Ahora coincide con el puerto de NestJS
Guarda los cambios en index.html y vuelve a abrirlo en tu navegador.

🧪 Cómo Probar el Funcionamiento
Asegúrate de que el backend de NestJS esté corriendo (npm run start:dev).

Abre el archivo src/Front/index.html en múltiples pestañas o ventanas del navegador. Cada pestaña representará un "usuario" diferente.

Escribe mensajes en el campo de texto y haz clic en "Enviar" (o presiona Enter).

Observa cómo los mensajes se muestran en tiempo real en todas las pestañas conectadas. También verás mensajes del sistema cuando un usuario se conecte o desconecte.