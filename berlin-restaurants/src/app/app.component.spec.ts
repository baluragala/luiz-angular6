import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";

describe("AppComponent", () => {
  let fixture, app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [SharedModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: "" }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'berlin-restaurants'`, () => {
    expect(app.title).toEqual("berlin-restaurants");
  });

  it("should render title in a h1 tag", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to berlin-restaurants!"
    );
    app.title = "angular6";
    fixture.detectChanges();
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to angular6!"
    );
  });
});
