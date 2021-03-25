import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_Key = 'SJtLy0wNppl58fwcHcMcFKo9i4tkASgJlgLSmXkJ';

  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
  }

  public getPicture() {
    return this.httpClient.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
  }
}
