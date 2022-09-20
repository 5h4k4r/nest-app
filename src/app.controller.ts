import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({ summary: 'Get hello world response' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: String,
  })
  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
}
