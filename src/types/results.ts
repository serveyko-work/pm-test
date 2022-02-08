export interface results {
  "next": string,
  "previous": string | null,
  "total_count": number,
  "page_count": number,
  "current_page": number,

  results: Array<any>
}

interface desiredposition {
  "id": number,
  "position": string
}

interface city {
  "id": number,
  "display_name": string
}

interface education {
  "id": number,
  "education_level": string,
  "educational_institution": string,
  "faculty_speciality": string,
  "date_from": string,
  "date_to": string,
  "city": city
}

export interface workexperience {
  "id": number,
  "company_name": string,
  "position": string,
  "date_from": string,
  "date_to": string,
  "resp_ach": string,
  "category_exp": string
}

interface coursestraining {
  "id": number,
  "title": string,
  "date_end": string,
  "description": string,
  "city": city
}

interface knownlanguage {
  "id": number,
  "language_level": string,
  "language": string,
  "certificate": string,
  "interview_language": boolean
}

interface recommendation {
  "id": number,
  "recommended_face": string,
  "position": string,
  "company": string,
  "phone_number": string,
  "email": string
}

interface favorites {
  "employer": null | string,
  "recruiter": null | string,
  "hr": null | boolean | string
}

export interface workCity {
  display_name: string
}

export interface user {
  "id": number,
  "visibility": boolean,
  "category": string,
  "employment_type": string,
  "wage_from": number,
  "wage_to": number,
  "currency": string,
  "sex": string,
  "first_name": string,
  "last_name": string,
  "patronymic": string,
  "seeker": number,
  "skype": string | null,
  "email_com": string | null,
  "add_num": Array<any>,
  "photo": string | null,
  "desiredposition": Array<desiredposition>,
  "another_city": boolean,
  "work_city": Array<any>,
  "phone_number": string,
  "work_experience_exist": boolean,
  "workexperience": Array<workexperience>,
  "portfolio": string | null,
  "education": Array<education>,
  "coursestraining": Array<coursestraining>,
  "knownlanguage": Array<knownlanguage>
  "search_relevance": string,
  "computerskills": any | null,
  "recommendation": Array<recommendation>,
  "additionalinformation": any | null,
  "disability": any | null,
  "in_english": boolean,
  "created_at": string,
  "updated_at": string,
  "hits": number,
  "birthday": string | null,
  "status": boolean,
  "user_id": number,
  "favorites": favorites
}