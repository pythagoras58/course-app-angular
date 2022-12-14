import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name : 'name'
})
export class NamePipe implements PipeTransform{
  transform(name:string ): string {
    return 'Your Full Name is : ' + name.toUpperCase()
  }
}
