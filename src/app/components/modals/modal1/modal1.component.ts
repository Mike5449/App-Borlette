import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ServicesGeneralService } from '../../../shared-service/services-general.service';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss']
})
export class Modal1Component implements OnInit {

  constructor(private modalService:ServicesGeneralService, private el: ElementRef) { }

  @Input() id: string='';
    private element: any;

  ngOnInit(): void {

    if (!this.id) {
      console.error('modal must have an id');
      return;
  }


  // move element to bottom of page (just before </body>) so it can be displayed above everything else
  document.body.appendChild(this.element);

  // close modal on background click
  this.element.addEventListener('click', (el:any) => {
      if (el.target.className === 'jw-modal') {
          this.close();
      }
  });

  // add self (this modal instance) to the modal service so it's accessible from controllers
  this.modalService.add(this);
  }




    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }

}
