import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return {
      first: 'initial text',

      firstname: 'Yehuda',
      lastname: 'Katz',

      people: [
        {
          firstname: 'Nils',
          lastname: 'Knappmeier',
        },
        {
          firstname: 'Yehuda',
          lastname: 'Katz',
        },
      ],
    };
  }

  @Get('/api')
  getHello(): string {
    return this.appService.getHello();
  }
}
