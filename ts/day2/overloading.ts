class Utils {
  reverse(input: string): string;
  reverse(arr: Array<string>): Array<string>;
  reverse(stringOrArray: string | Array<string>): string | Array<string> {
    return typeof stringOrArray === "string"
      ? stringOrArray
          .split("")
          .reverse()
          .join("")
      : stringOrArray.slice().reverse();
  }
}

var u = new Utils();
console.log(u.reverse("bala"));
