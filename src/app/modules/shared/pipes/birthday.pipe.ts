import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name : 'birthday'
})
export class BirthdayPipe implements PipeTransform{
  transform(birthday: Date): string {
    return 'My birthday is on : ' + birthday;
  }
}
