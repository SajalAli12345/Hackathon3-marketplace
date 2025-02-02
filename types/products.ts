export interface Product {
    _id: string;
    title: string;
    _type:"product"
    price: number;
    discountPercentage: number;
    description: string;
    slug: {
      _type:"slug"
      current:string;
    }
    productImage?: {
      asset: {
        _ref: string;
        _type:"image";
      };
    };
    tags: string[];
    stock:number;
  }
