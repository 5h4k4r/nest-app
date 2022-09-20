import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ListPostsDto } from './dto/list-posts.dto';

@Controller()
@ApiTags('Posts')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({ summary: 'Get hello world response' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ListPostsDto,
  })
  @Get('posts')
  listPosts(): ListPostsDto {
    return this.appService.listPosts();
  }
  @Get('')
  getHello(): string {
    return 'hello';
  }
}
