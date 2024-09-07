import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SurveyApiService } from '../survey-api.service';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-list-surveys',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './list-surveys.component.html',
  styleUrl: './list-surveys.component.css'
})

export class ListSurveysComponent implements OnInit {
  surveys: any;
  public allSurveysSignal: any = signal<[]>([]);
  enableEditForm: boolean = false;
  surveyFormApiObj = inject(SurveyApiService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  allSurveys: any = [];
    /**
   * Initializes the component and fetches data.
   *
   * This function is called when the component is initialized. It calls the `fetchData` method to retrieve data from the server.
   */
  ngOnInit(): void {
    this.fetchData();
  }

    /**
   * Refreshes the data by calling the fetchData method.
   *
   * @return {void} This function does not return anything.
   */

  refreshData(): void {
    // console.log("refreshed!!!");
    this.fetchData();
  }
  /**
   * Fetches data from the survey API and updates the component's surveys and allSurveysSignal.
   *
   * This function calls the `getSurveys` method of the `surveyFormApiObj` to retrieve the surveys from the API.
   * It then subscribes to the Observable returned by `getSurveys` and updates the component's `surveys` property
   * with the result. Additionally, it updates the `allSurveysSignal` with the result's `surveys` property and
   * triggers change detection using the `cdr` (ChangeDetectorRef) service.
   *
   * @return {void} This function does not return anything.
   */
  fetchData(): void {
    this.surveys = this.surveyFormApiObj.getSurveys();
    this.surveys.subscribe({
      next: (result: any) => {
        this.allSurveysSignal.set(result.surveys);
        this.cdr.detectChanges();
      }
    });
  }

  currentUpdatableSurvey: any = {
    "firstName": '',
    "lastName": '',
    "address": '',
    "city": '',
    "state": '',
    "zip": '',
    "phone": '',
    "email": '',
    "dateOfSurvey": '',
    "q1Students": false,
    "q1Location": false,
    "q1Campus": false,
    "q1Dorms": false,
    "q1Atmosphere": false,
    "q1Sports": false,
    "q2answer": '',
    "q3answer": '',
    "additionalComments": '',
    "id": -1
  };
  formInvalidMessage: boolean = false;
  /**
 * Updates the current updatable survey and enables the edit form.
 *
 * @param {any} survey - The survey to be updated.
 * @param {Number} idx - The index of the survey.
 * @return {void} This function does not return anything.
 */
  onClickUpdate(survey: any, idx: Number) {

    this.currentUpdatableSurvey = { ...survey };
    this.enableEditForm = true;
  }

    /**
   * Deletes a survey and refreshes the data.
   *
   * @param {any} survey - The survey to be deleted.
   * @return {void} This function does not return anything.
   */
  onClickDelete(survey: any) {
    // this.surveyFormApiObj.deleteSurvey(survey.id);
    // this.refreshData();
    let delObs = this.surveyFormApiObj.deleteSurvey(survey.id);
    delObs.subscribe({
      next: result => {
        console.log(`successfully deleted \n ${result}`);
        this.refreshData();
      }
    })
  }

    /**
   * Submits the form and updates the current updatable survey if the ID is not -1.
   *
   * @param {NgForm} form - The form to be submitted.
   * @return {void} This function does not return anything.
   */

  onSubmit(form: NgForm): void {
    if (this.currentUpdatableSurvey.id == -1) {
      alert("Something wrong with the update request");
    } else {
      let putobs = this.surveyFormApiObj.updateSurvey(this.currentUpdatableSurvey);
      putobs.subscribe({
        next: result => {
          this.enableEditForm = false;
          this.fetchData();
        },
        error: err => console.log(err)

      })
    }

  }

    /**
   * Resets the enableEditForm flag to false.
   *
   * @return {void} This function does not return anything.
   */

  onReset():void{
    this.enableEditForm=false;
  }

}
