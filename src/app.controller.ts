import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ListPostsDto } from './dto/list-posts.dto';

@Controller('posts')
@ApiTags('Posts')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({ summary: 'Get hello world response' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ListPostsDto,
  })
  @Get()
  getHello(): ListPostsDto {
    return this.appService.getHello();
  }
}
