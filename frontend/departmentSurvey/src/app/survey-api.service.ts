import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { surveyObject } from './surveyObject.model';
import { UrlCodec } from '@angular/common/upgrade';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class SurveyApiService {
  constructor(private httpClient: HttpClient) {
    
   }

  url:string = "http://localhost:8080";

     /**
    * Retrieves all surveys from the server.
    *
    * @return {Observable<{surveys: surveyObject[] | undefined}>} An observable that emits an object containing an array of survey objects, or undefined if there are no surveys.
    */
   getSurveys(): Observable<{surveys: surveyObject[] | undefined}>{
      // let allSurveys:any = {};
      let obsget = this.httpClient.get<{surveys: surveyObject[] | undefined}>(`${this.url}/allSurveys`);
      return obsget;
   }
  /**
   * Sends a survey request body to the server for posting.
   *
   * @param {surveyObject} surveyRequestBody - The survey request body to be posted.
   * @return {void} This function does not return anything.
   */
  postSurvey(surveyRequestBody: surveyObject ){
    let obs = this.httpClient.post(
        `${this.url}/addSurvey`,
        surveyRequestBody
    );

    obs.subscribe({
      next: (result) => console.log(result),
      error: (err) => console.log(err)
    })
  }
/**
 * Updates a survey using the provided survey request body.
 *
 * @param {surveyObject} surveyRequestBody - The survey request body.
 * @return {Observable<boolean>} An observable that emits a boolean value indicating the success of the update.
 */
  updateSurvey(surveyRequestBody: surveyObject):Observable<boolean>{
    let obs = this.httpClient.put<boolean>(
      `${this.url}/updateSurvey`,surveyRequestBody
    );
    return obs;
  }
  /**
 * Deletes a survey with the given ID.
 *
 * @param {Number} id - The ID of the survey to be deleted.
 * @return {Observable<boolean>} An observable that emits a boolean indicating whether the deletion was successful.
 */

  deleteSurvey(id:Number):Observable<boolean>{
    let obs = this.httpClient.delete<boolean>(
      `${this.url}/deleteSurvey/${id}`
    )

    return obs;
    // obs.subscribe({
    //   next: (result) => console.log(`Deleted! ${result}`),
    //   error: (err) => console.log(err)
    // })
  }
}
