import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      let valore = new Date(control.value).getTime();
      let oggi = new Date().getTime();
      let minimo = new Date(1900, 1, 1).getTime();
      console.log(valore);
      console.log(oggi);
      
      
      if (valore < minimo){
          return { minimo: true }
      }
      if(valore > oggi) {
          return { massimo: true }
      }
      return null;
    };
}
