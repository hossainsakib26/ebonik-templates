import {Category} from './category';

export class Product {
  id: number = 0;
  name: string = '';
  imgUrl: string = '';
  price: number = 0;
  categoryId?: number = 0;
  categoryName?: string = '';
  productTypeName?: string = '';
}
