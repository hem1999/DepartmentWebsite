package com.surveyForm.survey;
import java.util.HashMap;
import java.util.List;
public interface surveyFormServices {
    boolean postSurvey(surveyFormEntity surveyForm);
    HashMap<String,List<surveyFormEntity>> getSurveys();
    boolean deleteSurvey(Long surveyId);
    boolean updateSurvey(surveyFormEntity surveyForm);
    surveyFormEntity getSurveyById(Long surveyId);
}
