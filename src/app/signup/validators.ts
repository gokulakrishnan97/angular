import { AbstractControl, ValidationErrors } from '@angular/forms';

export class InputValidators {
  static canContainSpace(control: AbstractControl): ValidationErrors | null{
    if((control.value as string).includes(' ')){
      return { canContainSpace: true}
    }

    return null;
  }
}