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
  modalRef: BsModalRef;
 
  constructor(public bsModalRef: BsModalRef, public fb: FormBuilder) {
    this.contactForm = this.fb.group({
      profession: [''],
      comments: ['', [Validators.required]],
      fullname: [''],
      email: ['', [Validators.required]],
      phone: [''],
      timeZone: [''],
    });
  }

  hideModal() {
    this.bsModalRef.hide();
  }
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

  onSubmit() {
      console.log('form submitted');
  }


}

