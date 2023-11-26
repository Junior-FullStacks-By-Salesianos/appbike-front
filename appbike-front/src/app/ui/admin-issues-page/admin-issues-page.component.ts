import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../models/issues.interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-issues-page',
  templateUrl: './admin-issues-page.component.html',
  styleUrl: './admin-issues-page.component.css'
})
export class AdminIssuesPageComponent implements OnInit {
  constructor(private issueService: IssuesService, private stationService: StationsService) { }
  issueList: Issue[] = [];
  private modalService = inject(NgbModal);
  closeResult = '';
  stationList: Station[] = [];

  ngOnInit(): void {
    this.issueService.getAll().subscribe(resp => {
      this.issueList = resp.content;
    })
  }

  isFinished(issue:Issue){
    if(issue.estado == "FINISHED") return true;

    return false;
  }

  setAsDone(issue:Issue){
    issue.estado = "FINISHED"
    this.issueService.setAsDone(issue).subscribe(resp => {
      window.location.reload();
    })
  }

  deleteIssue(id:number){
    this.issueService.delete(id).subscribe(resp => {
      window.location.reload();
    });
  }

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
