package com.surveyForm.survey;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class surveyFormController {
    surveyFormServiceImpl surveyFormServiceImpl;
    public surveyFormController(surveyFormServiceImpl surveyFormServiceImpl) {
        this.surveyFormServiceImpl = surveyFormServiceImpl;
    }

    @GetMapping(path = "/allSurveys")
    public ResponseEntity<HashMap<String,List<surveyFormEntity>>> allSurveys() {
        return new ResponseEntity<>(this.surveyFormServiceImpl.getSurveys(), HttpStatus.OK);
    }

    @PostMapping(path="/addSurvey")
    public ResponseEntity<surveyFormEntity> addSurvey(@RequestBody surveyFormEntity surveyFormEntity) {
        if(this.surveyFormServiceImpl.postSurvey(surveyFormEntity)){
            return new ResponseEntity<>(surveyFormEntity, HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(surveyFormEntity, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(path = "/updateSurvey")
    public ResponseEntity<surveyFormEntity> updateSurvey(@RequestBody surveyFormEntity surveyFormEntity) {
        if(this.surveyFormServiceImpl.updateSurvey(surveyFormEntity)){
            return new ResponseEntity<>(surveyFormEntity, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(surveyFormEntity, HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping(path = "/deleteSurvey/{id}")
    public ResponseEntity<Boolean> deleteSurvey(@PathVariable Long id) {
        if(this.surveyFormServiceImpl.deleteSurvey(id)){
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }

    @GetMapping(path = "/survey/{id}")
    public ResponseEntity<surveyFormEntity> getSurvey(@PathVariable Long id) {
        surveyFormEntity s = this.surveyFormServiceImpl.getSurveyById(id);
        if(s!=null){
            return new ResponseEntity<>(s, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }


}
