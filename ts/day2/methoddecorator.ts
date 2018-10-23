const log = (
  target: Object,
  key: string | symbol,
  descriptor: TypedPropertyDescriptor<Function>
) => {
  return {
    value: function(...args: any[]) {
      console.log(new Date());
      //some code
      console.log(new Date());
      const result = descriptor.value.apply(target, args);
      return result;
    }
  };
};

class Calculator {
  @log
  add(x: number, y: number) {
    return x + y;
  }

  @log
  sub(x: number, y: number) {
    return x - y;
  }
}

console.log(new Calculator().add(1, 3));
console.log(new Calculator().sub(1, 3));
