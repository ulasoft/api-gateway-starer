import { ApiProperty } from '@nestjs/swagger';

export class ProductActivationParamsDto {
  @ApiProperty({ example: 'f9b2a018-ea8c-4c1b-851f-48238e35b92c' })
  id: string;
}

export class ProductActivationDto {
  @ApiProperty({ example: 'coin.activation_product' })
  method: string;
  @ApiProperty({ type: ProductActivationParamsDto })
  params: ProductActivationParamsDto;
}
