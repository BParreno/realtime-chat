// src/main.ts del proyecto chat-app
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002); // <--- ¡CAMBIA ESTA LÍNEA A 3002!
  console.log('Chat-App escuchando en el puerto 3002'); // Opcional: para confirmación
}
bootstrap();