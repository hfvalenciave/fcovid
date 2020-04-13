import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(ContactModalComponent,  {static: false}) contactModal: ContactModalComponent;
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  showModal() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ContactModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
