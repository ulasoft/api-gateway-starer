import { ApiProperty } from '@nestjs/swagger';
import { ProductResDto } from '../coin.dto';
import { PaginateDto } from '../../../utils/dto/paginate.dto';

export class HistoryParamsDto {
  @ApiProperty({ example: 1 })
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  limit: number;
}

export class HistoryActiveDto {
  @ApiProperty({ example: 'coin.get_active_histories' })
  method: string;
  @ApiProperty({ type: HistoryParamsDto })
  params: HistoryParamsDto;
}

export class HistoryDto {
  @ApiProperty({ example: 'coin.get_histories' })
  method: string;
  @ApiProperty({ type: HistoryParamsDto })
  params: HistoryParamsDto;
}

export class HistoryOneResDto {
  @ApiProperty({ example: '867348d5-5359-4717-b6e7-7605556d8d19' })
  id: string;
  @ApiProperty({ type: ProductResDto })
  product: ProductResDto;
  @ApiProperty({ example: '2022-12-12 00:05:00' })
  created_at: string;
  @ApiProperty({ example: '2022-12-14 00:04:59' })
  experied_at: string;
  @ApiProperty({ example: 10000 })
  price: number;
  @ApiProperty({ example: 1 })
  qty: number;
}

export class HistoryResDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: HistoryOneResDto, isArray: true })
  result: HistoryOneResDto[];
}
