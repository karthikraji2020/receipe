import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReceipesService {

  constructor( private _http:HttpClient) {

    
   }

   getReceipeData(){
     console.log(environment.APIURL);
     return this._http.get(`${environment.APIURL}`);
   }
}
