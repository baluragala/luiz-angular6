import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "domain"
})
export class DomainPipe implements PipeTransform {
  transform(value: string, ext?: boolean, extras?: string): any {
    let segments = value.split("/");
    if (ext == true) return segments[2];
    else return segments[2].split(".")[0];
  }
}
