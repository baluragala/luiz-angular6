// class Product {
//   private title: string;
//   private price: number;
//   constructor(title: string, price: number) {
//     this.title = title;
//     this.price = price;
//   }

//   get Title(): string {
//     return this.title;
//   }

//   set Title(value: string) {
//     this.title = value;
//   }
// }

// let p11 = new Product("iphone", 2000);
// console.log(p11.price);

class Product {
  constructor(protected title: string, protected price: number) {}

  get Title(): string {
    return this.title;
  }

  set Title(value: string) {
    this.title = value;
  }
}

let p11 = new Product("iphone", 2000);

class OnlineProduct extends Product {
  constructor(
    protected title: string,
    protected price: number,
    protected deliveryMode: string
  ) {
    super(title, price);
  }
}
