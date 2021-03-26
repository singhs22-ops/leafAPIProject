import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Injectable } from '@angular/core';

import {API_URL} from './constantsdata/leafconstant';

@Injectable({
  providedIn: 'root'
})
export class LeafController1Service {

   

  constructor(private http: HttpClient) {
    
   }

  getLeafJSONentries(){
    return this.http.post(`${API_URL}/leaf/getLeafJSON`,{ responseType: 'text'});
  }

  getLeafJSONbyid(idNum: number){
    return this.http.post(`${API_URL}/leaf/getLeafJSONbyid/${idNum}`,null);
  }

  getLeafJSONbyname(byName: String){
    return this.http.post(`${API_URL}/leaf/getLeafJSONbyname/${byName}`,{ responseType: 'text'});
  }

  getLeafJSONbySex(byNabyGender: String){
    return this.http.post(`${API_URL}/leaf/getLeafJSONbyname/${byNabyGender}`,{ responseType: 'text'});
  }
}
