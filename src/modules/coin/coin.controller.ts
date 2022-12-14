import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CoinService } from './coin.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MERCHANT_ID } from '@env';
import {
  CoinBalanceRes,
  ProductFindOneDto,
  ProductFindOneResDto,
  ProductQueryDto,
  ProductWithPaginateRes,
} from './coin.dto';
import { ErrorResourceDto } from '../../utils/dto/error.dto';
import { ProductActivationDto } from './dto/product-activation.dto';
import { HistoryActiveDto, HistoryDto, HistoryResDto } from './dto/history.dto';

@ApiBearerAuth()
@ApiTags('Coin')
@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @ApiOkResponse({
    status: 200,
    type: CoinBalanceRes,
    description: 'Get Coin balance',
  })
  @ApiOperation({ summary: 'Current Balance user' })
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @HttpCode(200)
  @Post('/balance')
  balance() {
    const data = {
      merchant_id: MERCHANT_ID,
      user_id: 1,
    };

    return this.coinService.getBalance(data);
  }

  @ApiOkResponse({
    type: ProductWithPaginateRes,
  })
  @ApiOperation({
    summary: 'Products List',
    description: 'endpointUrl: POST /v1/coin/products',
  })
  @ApiBadRequestResponse({ type: ErrorResourceDto })
  @HttpCode(200)
  @Post('/products')
  products(@Body() payload: ProductQueryDto) {
    return 'Good';
  }

  @ApiOkResponse({ type: ProductFindOneResDto })
  @ApiBadRequestResponse({ type: ErrorResourceDto })
  @ApiOperation({
    summary: 'Product FindOne',
    description: 'endpointUrl: POST /v1/coin/products/findOne</p>',
  })
  @HttpCode(200)
  @Post('/products/findOne')
  productFindOne(@Body() payload: ProductFindOneDto) {
    return 'FindOne Product';
  }

  @ApiOperation({
    summary: 'Product Activation',
    description: 'POST /v1/coin/products/activation',
  })
  @ApiResponse({ status: 202, type: ProductFindOneResDto })
  @ApiResponse({
    status: 403,
    type: ErrorResourceDto,
    description: 'Default errors',
  })
  @ApiResponse({
    status: 402,
    type: ErrorResourceDto,
    description: 'UserCurrentBalance  <=  Product->price',
  })
  @HttpCode(202)
  @Post('/products/activation')
  productActivation(@Body() payload: ProductActivationDto) {
    return 'Activation Product';
  }

  @ApiOperation({
    summary: 'get active products histories',
    description: 'POST /v1/coin/histories/active',
  })
  @ApiOkResponse({ type: HistoryResDto })
  @ApiResponse({ status: 403, type: ErrorResourceDto })
  @Post('/histories/active')
  histories_active(@Body() payload: HistoryActiveDto) {
    return 'get active histories';
  }

  @ApiOperation({
    summary: 'get histories products',
    description: 'POST /v1/coin/histories',
  })
  @ApiOkResponse({ type: HistoryResDto })
  @ApiResponse({ status: 403, type: ErrorResourceDto })
  @Post('/histories')
  histories(@Body() payload: HistoryDto) {
    return 'get active histories';
  }
}
