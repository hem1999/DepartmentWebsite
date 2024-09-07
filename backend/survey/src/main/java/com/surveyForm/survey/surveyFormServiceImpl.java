package com.surveyForm.survey;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;


import java.util.List;
import java.util.Optional;
import java.util.HashMap;
@Service
public class surveyFormServiceImpl implements surveyFormServices {
    public surveyFormRepository surveyFormRepositoryObj;

    public surveyFormServiceImpl(surveyFormRepository surveyFormRepository) {
        this.surveyFormRepositoryObj = surveyFormRepository;
    }
    @Override
    public boolean postSurvey(surveyFormEntity surveyForm) {
        try{
            this.surveyFormRepositoryObj.save(surveyForm);
            return true;
        }catch (Exception e) {
            return false;
        }

    }

    @Override
    public HashMap<String,List<surveyFormEntity>> getSurveys() {
        HashMap<String,List<surveyFormEntity>> surveys = new HashMap<>();
        surveys.put("surveys",this.surveyFormRepositoryObj.findAll());
        return surveys;
    }

    @Override
    public boolean deleteSurvey(Long surveyId) {
        try{
            this.surveyFormRepositoryObj.deleteById(surveyId);
            return true;
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    @Override
    public boolean updateSurvey(surveyFormEntity surveyForm) {
        System.out.println("update request invoked the service impl");
        Optional<surveyFormEntity> surveyFormObj = this.surveyFormRepositoryObj.findById(surveyForm.getId());
        if(surveyFormObj.isPresent()) {
            surveyFormEntity s = surveyFormObj.get();
            s.setFirstName(surveyForm.getFirstName());
            s.setLastName(surveyForm.getLastName());
            s.setEmail(surveyForm.getEmail());
            s.setAddress(surveyForm.getAddress());
            s.setPhone(surveyForm.getPhone());
            s.setCity(surveyForm.getCity());
            s.setState(surveyForm.getState());
            s.setZip(surveyForm.getZip());
            s.setAdditionalComments(surveyForm.getAdditionalComments());
            s.setDateOfSurvey(surveyForm.getDateOfSurvey());
            s.setQ1Atmosphere(surveyForm.isQ1Atmosphere());
            s.setQ1Campus(surveyForm.isQ1Campus());
            s.setQ1Dorms(surveyForm.isQ1Dorms());
            s.setQ1Location(surveyForm.isQ1Location());
            s.setQ1Sports(surveyForm.isQ1Sports());
            s.setQ1Students(surveyForm.isQ1Students());
            s.setQ2answer(surveyForm.getQ2answer());
            s.setQ3answer(surveyForm.getQ3answer());
            this.surveyFormRepositoryObj.save(s);
            System.out.println("Perfectly saved by repository object");
            return true;
        }else{
            return false;
        }
    }

    @Override
    public surveyFormEntity getSurveyById(Long surveyId) {
        Optional<surveyFormEntity> s = this.surveyFormRepositoryObj.findById(surveyId);
        if(s.isPresent()) {
            return s.get();
        }
        return null;
    }


}
