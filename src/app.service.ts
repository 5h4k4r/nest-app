import { Injectable } from '@nestjs/common';
import { ListPostsDto } from './dto/list-posts.dto';

@Injectable()
export class AppService {
  getHello(): ListPostsDto {
    const listPostsDto: ListPostsDto = {
      items: [
        {
          description: ' Post description',
          title: 'Post title',
        }
      ],
    };

    return listPostsDto;
  }
}
