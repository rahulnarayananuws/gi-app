import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private API_URL= environment.API_URL;
  constructor(private http: HttpClient) { }

  SaveMyContact(contact: Contact): Observable<any> {
    return this.http.post(`${this.API_URL}/contacts`, contact);
  }
}
