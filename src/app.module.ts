import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './products/products.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './sub-categories/sub-categories.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [CustomerModule, ProductsModule, AdministratorsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'floransDb',
      autoLoadEntities: true,
      synchronize: true
    }),
    CategoriesModule,
    SubCategoriesModule,
    SalesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
