//our survey object type as interface

export interface surveyObject{
    
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    phone: string,
    email: string,
    dateOfSurvey: string,
    q1Students: boolean,
    q1Location: boolean,
    q1Campus: boolean,
    q1Atmosphere: boolean,
    q1Dorms: boolean,
    q1Sports: boolean,
    q2answer: string,
    q3answer: string
}