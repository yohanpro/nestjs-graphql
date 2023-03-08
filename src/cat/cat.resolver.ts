import { Resolver, Query } from '@nestjs/graphql';
import { Cat } from './entity/cat.entity';

@Resolver()
export class CatResolver {
  private readonly catLists: Cat[] = [
    { id: '1', name: 'Kitty', age: 2, breed: 'Persian' },
    { id: '2', name: 'Garfield', age: 3, breed: 'Siamese' },
    { id: '3', name: 'Tom', age: 1, breed: 'Sphynx' },
  ];

  @Query(() => [Cat])
  async cats(): Promise<Cat[]> {
    return this.catLists;
  }
}
