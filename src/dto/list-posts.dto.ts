import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from './post.dto';

export class ListPostsDto {
  @ApiProperty({
    isArray: true,
    type: Array<PostDto>,
    example: <Array<PostDto>>[
      {
        description: 'post description',
        title: 'Post title'
      }
    ]
  })
  items: Array<PostDto>;
}