import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  contactForm: FormGroup;
  
 
  constructor(public bsModalRef: BsModalRef, public fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      iAmA: ['', [Validators.required]],
      interestedIn: ['', [Validators.required]],
      readonlyHelpWith: ['', [Validators.required]],
    });
  }
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

  onSubmit() {
      console.log('form submitted');
  }


}

