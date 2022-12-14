import { ApiProperty } from '@nestjs/swagger';

export class PaginateDto {
  @ApiProperty({ example: 1 })
  current: number;
  @ApiProperty({ example: 0 })
  previous: number;
  @ApiProperty({ example: 2 })
  next: number;
  @ApiProperty({ example: 10 })
  perPage: number;
  @ApiProperty({ example: 10 })
  totalPage: number;
  @ApiProperty({ example: 128 })
  totalItem: number;
}
