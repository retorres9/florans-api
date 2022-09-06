import { Body, Controller, Post, Request } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';


@Controller('products')
export class ProductsController {
    @Post()
    crateProduct(@Body() createProductDto: CreateProductDto, @Request() req) {
        console.log(createProductDto, req);
    }
}
