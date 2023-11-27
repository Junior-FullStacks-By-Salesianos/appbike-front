import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateNotLaterThanTodayValidator(date:any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (!date) {
      // Handle cases where no date is selected (e.g., empty input)
      return null;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

    if (date < today) {
      return { dateNotLaterThanToday: true };
    }

    return null;
  };
}
