import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PostDto {
  @ApiProperty({
    type: String,
    example: 'Post title',
  })
  title: string;

  @ApiProperty({
    type: String,
    example: 'Post description',
  })
  description: string;
}
