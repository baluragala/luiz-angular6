interface IProduct {
  title: string;
  price: number;
  features?: Array<string>;
}

var p: IProduct = { title: "iphone", price: 2000 };
