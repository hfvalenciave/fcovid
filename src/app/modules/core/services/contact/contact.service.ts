import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendEmail(data, type) {
      console.log(data);
      console.log(type);
      data = {
        'data' : data,
        'messageType' : type
      }
      console.log(data);
  }
}
