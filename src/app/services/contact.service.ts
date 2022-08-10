import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  SaveMyContact(contact: Contact): Observable<any> {
    return this.http.post(`http://localhost:3000/contacts`, contact);
  }
}
