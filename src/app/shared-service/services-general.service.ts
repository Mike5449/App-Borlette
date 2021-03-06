import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesGeneralService {

 static headerInfo:Subject<string> = new Subject<string>();
 static hideAndShowSideBar:Subject<boolean> = new Subject<boolean>();
  constructor() { }

  private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
