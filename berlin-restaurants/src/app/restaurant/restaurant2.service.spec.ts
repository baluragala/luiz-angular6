import { TestBed, inject } from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { Restaurant2Service } from "./restaurant2.service";
import { RestaurantRecord } from "../restaurant-record.interface";
import { HttpEvent, HttpEventType } from "@angular/common/http";

describe("Restaurant2Service", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Restaurant2Service]
    })
  );

  it("should be created", () => {
    const service: Restaurant2Service = TestBed.get(Restaurant2Service);
    expect(service).toBeTruthy();
  });

  it("should get restaraunts", inject(
    [HttpTestingController, Restaurant2Service],
    (httpMock: HttpTestingController, service: Restaurant2Service) => {
      const mockRestaurants: Array<RestaurantRecord> = [
        {
          id: {
            $id: "r1"
          },
          name: "res1"
        },
        {
          id: {
            $id: "r2"
          },
          name: "res2"
        }
      ];

      service.getRestaurants().subscribe((data: RestaurantRecord[]) => {
        console.log("data", data);
        expect(data).toEqual(mockRestaurants);
      });

      const mockReq = httpMock.expectOne(
        "http://localhost:3000/restaurants?_page=51&_limit=20"
      );
      mockReq.flush(mockRestaurants);

      httpMock.verify();
    }
  ));
});
