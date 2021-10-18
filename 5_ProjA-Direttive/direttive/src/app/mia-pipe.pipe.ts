import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miaPipe'   // nome utilizzato nei template per interpolazione o binding
})
export class MiaPipePipe implements PipeTransform {

  // {{ stringa | miaPipe:'ciao':104 }} per esempio
  transform(value: string, ...args: number[]): string {
    if(value) {
      if(args[0]) {
        return value.substr(0, args[0]);
      } else {
        return value;
      }
    } else {
    return '';
    }
  }

 

}
