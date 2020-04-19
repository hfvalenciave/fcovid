import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.prod';

const urlMessage = 'messages';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(data, messageType) {
      const url = `${environment.api.url}/${urlMessage}`;
      const message = { data, messageType };
      return this.http.post(url, message).subscribe(response => console.log(response));
  }
}
