import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ContactService } from 'src/app/modules/core/services/contact/contact.service';
import { NotifierService } from "angular-notifier";

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
  private readonly notifier: NotifierService;
 
  constructor(
    public bsModalRef: BsModalRef, 
    public fb: FormBuilder, 
    public contactService: ContactService
    ) {
      this.contactForm = this.fb.group({
        profession: [''],
        comments: ['', [Validators.required]],
        fullname: [''],
        email: ['', [Validators.email]],
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
    if(this.contactForm.valid) {
      this.contactService.sendEmail(this.contactForm.value, 'anonymous');
      this.hideModal();

    } 
  }


}

