import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-participate-modal',
  templateUrl: './participate-modal.component.html',
  styleUrls: ['./participate-modal.component.scss']
})
export class ParticipateModalComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  contactForm: FormGroup;
  modalRef: BsModalRef;
 
  constructor(public bsModalRef: BsModalRef, public fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      teams: ['', [Validators.required]],
      areas: ['', [Validators.required]],
      descriptionProduct: ['', [Validators.required]],
      additionalComments: ['', [Validators.required]]
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
