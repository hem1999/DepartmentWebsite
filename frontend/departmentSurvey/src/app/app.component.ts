import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListSurveysComponent } from './list-surveys/list-surveys.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListSurveysComponent,SurveyFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'departmentSurvey';

  showWelcome = true;
  showForm = false;
  showList = false;
/**
 * Updates the visibility of different views based on the selected option.
 *
 * @param {Number} opt - The option selected to determine the view to show.
 * @return {void} This function does not return anything.
 */
  changeView(opt: Number){
    if (opt === 1){
      this.showWelcome = true;
      this.showForm = false;
      this.showList = false;
    }

    if(opt == 2){
      this.showWelcome = false;
      this.showForm = true;
      this.showList = false;
    }

    if(opt == 3){
      this.showWelcome = false;
      this.showForm = false;
      this.showList = true;
    }
  }
}
