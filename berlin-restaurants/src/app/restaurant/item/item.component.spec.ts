import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemComponent } from "./item.component";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { By } from "@angular/platform-browser";

describe("ItemComponent", () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [RouterTestingModule.withRoutes([]), SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.restaurant = {};
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should respond to click event", () => {
    const div = fixture.debugElement.query(By.css(".item"));
    spyOn(component, "onClick");
    div.nativeElement.click();
    expect(component.onClick).toHaveBeenCalledTimes(1);
  });
});
