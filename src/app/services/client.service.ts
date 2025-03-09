import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { APIResponseModel } from '../model/interface/role-int';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllclients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllDesignation")
  }

  addupdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "GetAllDesignation", obj)
  }

  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId="+id)
  }
}
