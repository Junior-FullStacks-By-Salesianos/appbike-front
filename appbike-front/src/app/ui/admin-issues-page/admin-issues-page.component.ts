import { Component, TemplateRef } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-issues-page',
  templateUrl: './admin-issues-page.component.html',
  styleUrl: './admin-issues-page.component.css'
})
export class AdminIssuesPageComponent {

  open(content: TemplateRef<any>) {
    this.stationService.getAllStations().subscribe(resp => {
      this.stationList = resp;

      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    })
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
