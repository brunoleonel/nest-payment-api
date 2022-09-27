import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  listAll(): string {
    return 'Todos';
  }

  @Get(':id')
  find(@Param() params): string {
    return `Produto ${params.id}`;
  }

  @Post()
  create(@Body() product): string {
    return `Produto ${product.name}`;
  }

  @Put(':id')
  update(@Param() params, @Body() product): string {
    return `Produto ${product.name}`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Produto ${params.id}`;
  }
}
