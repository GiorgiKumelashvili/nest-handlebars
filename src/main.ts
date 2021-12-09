import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(path.join(__dirname, '..', 'public'), {
    prefix: '/public',
  });
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  hbs.registerPartials(path.join(__dirname, '..', 'views', 'layouts'));
  hbs.handlebars.registerHelper('helper_name', () => 'helper value');
  hbs.handlebars.registerHelper('loud', (aString) => aString.toUpperCase());
  hbs.handlebars.registerHelper('print_person', function () {
    return this.firstname + ' ' + this.lastname;
  });

  await app.listen(3000);
}
bootstrap();
