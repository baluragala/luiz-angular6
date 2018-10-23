const log = <T>(originalConstructor: new (...args: any[]) => T) => {
  function newConstructor(...args) {
    console.log("Arguments: ", args.join(", "));
    new originalConstructor(args);
  }
  newConstructor.prototype = originalConstructor.prototype;
  return newConstructor;
};

@log
class Pet {
  constructor(name: string, age: number) {}
}

new Pet("Azor", 12);

@log
class Screen {
  constructor(width: number, height: number, orientatiom: string) {}
}

new Screen(1080, 1920, "");
