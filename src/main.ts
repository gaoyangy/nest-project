import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, {
    logger: console,
  });
  await app.listen(3000);
}
bootstrap();
