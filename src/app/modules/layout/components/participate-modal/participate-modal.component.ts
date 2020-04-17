import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ContactService } from 'src/app/modules/core/services/contact/contact.service';
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
 
  constructor(
    public bsModalRef: BsModalRef, 
    public fb: FormBuilder,
    public contactService: ContactService) {
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
    if(this.contactForm.valid) {
      this.contactService.sendEmail(this.contactForm.value, 'participate');
      this.hideModal();
    } 
  }

}
