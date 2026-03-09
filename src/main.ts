import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Agregar prefijo global a todas las rutas
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Hospital API')
    .setDescription('API for the Hospital project')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
