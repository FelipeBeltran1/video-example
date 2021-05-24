import { NestFactory } from '@nestjs/core';
import {ConfigService} from '@nestjs/config';
import {ValidationPipe} from '@nestjs/common'

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const {appPort, appHostServer, appPrefix} = configService.get('app');
  console.log(appPort);
  
  app.setGlobalPrefix(appPrefix);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(appPort || 4200);

  console.log(`Server is running on ${appHostServer}/${appPrefix}`);
  
}
bootstrap();
