package com.surveyForm.survey;
import jakarta.persistence.*;

import java.time.LocalDate;

//enum q1Options{
//    STUDENTS,
//    LOCATION,
//    CAMPUS,
//    ATMOSPHERE,
//    DORM_ROOMS,
//    SPORTS
//}

//enum q2Options{
//    FRIENDS,
//    TELEVISION,
//    INTERNET,
//    OTHER,
//    EMPTY()
//}

//enum q3Options{
//    VERY_LIKELY,
//    LIKELY,
//    UNLIKELY,
//    EMPTY()
//}

@Entity
public class surveyFormEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String phone;
    private String email;
    private LocalDate dateOfSurvey;
    private boolean q1Students;
    private boolean q1Location;
    private boolean q1Campus;
    private boolean q1Atmosphere;
    private boolean q1Dorms;
    private boolean q1Sports;
//    @Enumerated(EnumType.STRING)
//    private q2Options q2answer;
//
//    @Enumerated(EnumType.STRING)
//    private q3Options q3answer;
    private String q2answer;
    private String q3answer;

    private String additionalComments;

    public boolean isQ1Students() {
        return q1Students;
    }

    public void setQ1Students(boolean q1Students) {
        this.q1Students = q1Students;
    }

    public boolean isQ1Location() {
        return q1Location;
    }

    public void setQ1Location(boolean q1Location) {
        this.q1Location = q1Location;
    }

    public boolean isQ1Campus() {
        return q1Campus;
    }

    public void setQ1Campus(boolean q1Campus) {
        this.q1Campus = q1Campus;
    }

    public boolean isQ1Atmosphere() {
        return q1Atmosphere;
    }

    public void setQ1Atmosphere(boolean q1Atmosphere) {
        this.q1Atmosphere = q1Atmosphere;
    }

    public boolean isQ1Dorms() {
        return q1Dorms;
    }

    public void setQ1Dorms(boolean q1Dorms) {
        this.q1Dorms = q1Dorms;
    }

    public boolean isQ1Sports() {
        return q1Sports;
    }

    public void setQ1Sports(boolean q1Sports) {
        this.q1Sports = q1Sports;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDateOfSurvey() {
        return dateOfSurvey;
    }

    public void setDateOfSurvey(LocalDate dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

//    public q2Options getQ2answer() {
//        return q2answer;
//    }
//
//    public void setQ2answer(q2Options q2answer) {
//        this.q2answer = q2answer;
//    }
//
//    public q3Options getQ3answer() {
//        return q3answer;
//    }
//
//    public void setQ3answer(q3Options q3answer) {
//        this.q3answer = q3answer;
//    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }


    public String getQ2answer() {
        return q2answer;
    }

    public void setQ2answer(String q2answer) {
        this.q2answer = q2answer;
    }

    public String getQ3answer() {
        return q3answer;
    }

    public void setQ3answer(String q3answer) {
        this.q3answer = q3answer;
    }
}
