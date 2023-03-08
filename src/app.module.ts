import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { CatResolver } from './cat/cat.resolver';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true, driver: 'graphql' })],
  // imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
