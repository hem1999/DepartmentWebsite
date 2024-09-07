import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SurveyApiService } from '../survey-api.service';
@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css',
})
export class SurveyFormComponent {
  formInvalidMessage = false;
  acknowledgementError = false;
  surveyFormApiObj = inject(SurveyApiService);

  /**
   * Submits the form and sends the data to the server.
   *
   * @param {NgForm} form - The form to be submitted.
   * @return {void} This function does not return anything.
   */
  onSubmit(form: NgForm) {
    if (form.untouched || form.invalid) {
      this.acknowledgementError = true;
      this.formInvalidMessage = true;
      return;
    }

    this.formInvalidMessage = false;
    this.acknowledgementError = false;
    let formValue = form.form.value;
    let requestBody = {
      firstName: formValue['firstName'],
      lastName: formValue['lastName'],
      address: formValue['address'],
      city: formValue['city'],
      state: formValue['state'],
      zip: formValue['zipcode'],
      phone: formValue['telephone'],
      email: formValue['email'],
      dateOfSurvey: formValue['dateOfSurvey'],
      q1Students: false,
      q1Location: false,
      q1Campus: true,
      q1Dorms: false,
      q1Atmosphere: true,
      q1Sports: false,
      q2answer: formValue['interest'],
      q3answer: formValue['likelihood'],
      additionalComments: formValue['additionalComments'],
    };
    requestBody['q1Students'] = formValue['likeStudents'] === true;
    requestBody['q1Location'] = formValue['likeLocation'] === true;
    requestBody['q1Campus'] = formValue['likeCampus'] === true;
    requestBody['q1Dorms'] = formValue['likeDorms'] === true;
    requestBody['q1Atmosphere'] = formValue['likeAtmosphere'] === true;
    requestBody['q1Sports'] = formValue['likeSports'] === true;

    this.surveyFormApiObj.postSurvey(requestBody);
    alert('Form submission successful!');
    form.reset();
  }

  /**
   * Resets the form and logs a message to the console.
   *
   * @param {NgForm} form - The form to be reset.
   * @return {void} This function does not return anything.
   */
  onReset(form: NgForm) {
    console.log('you clicked on reset button');
    form.reset();
  }
}
