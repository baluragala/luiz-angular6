import { DomainPipe } from "./domain.pipe";

describe("DomainPipe", () => {
  it("create an instance", () => {
    const pipe = new DomainPipe();
    expect(pipe).toBeTruthy();
  });

  it("should return domain name ", () => {
    const pipe = new DomainPipe();
    expect(pipe.transform("http://berlin-restaurants.com")).toEqual(
      "berlin-restaurants"
    );
    expect(pipe.transform("http://berlin-restaurants.com", true)).toEqual(
      "berlin-restaurants.com"
    );
  });
});
