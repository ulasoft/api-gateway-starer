import { ApiProperty } from '@nestjs/swagger';
import { PaginateDto } from '../../utils/dto/paginate.dto';

export class CoinBalanceRes {
  @ApiProperty({ example: 10000 })
  balance: number;
}

export class ProductParamDto {
  @ApiProperty({ example: 1 })
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  limit: number;
}

export class ProductQueryDto {
  @ApiProperty({ example: 'coin.get_all_products' })
  method: string;
  @ApiProperty({ type: ProductParamDto })
  params: ProductParamDto;
}

export class ProductMeasurementFindOneRes {
  @ApiProperty({ example: 'Dona' })
  name: string;
}

export class ProductResDto {
  @ApiProperty({ example: 'f9b2a018-ea8c-4c1b-851f-48238e35b92c' })
  id: string;
  @ApiProperty({ example: 'Iphone Pro Max 16' })
  name: string;
  @ApiProperty({
    example: '<b>Iphone Pro Max 16 Good Phone</b>',
  })
  description: string;
  @ApiProperty({ example: 'https://temp.aws.url/iphone16.png' })
  image: string;
  @ApiProperty({ example: 10 })
  qty: number;
  @ApiProperty({ example: 30000 })
  price: number;
  @ApiProperty({ type: ProductMeasurementFindOneRes })
  measurement: ProductMeasurementFindOneRes;
}

export class ProductWithPaginateRes {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({
    type: ProductResDto,
    isArray: true,
  })
  result: ProductResDto[];
}

//findOne

export class ProductFindOneParamsDto {
  @ApiProperty({ example: 'f9b2a018-ea8c-4c1b-851f-48238e35b92c' })
  id: string;
}

export class ProductFindOneDto {
  @ApiProperty({ example: 'coin.get_product' })
  method: string;
  @ApiProperty({ type: ProductFindOneParamsDto })
  params: ProductFindOneParamsDto;
}

export class ProductFindOneResDto {
  @ApiProperty({ type: ProductResDto })
  result: ProductResDto;
}
