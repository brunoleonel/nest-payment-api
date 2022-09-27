import { ProductsController } from './products/controllers/products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './products/products.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'payments',
      schema: 'public',
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [],
})
export class AppModule {}
