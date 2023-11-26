import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../models/issues.interface';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-admin-issues-page',
  templateUrl: './admin-issues-page.component.html',
  styleUrl: './admin-issues-page.component.css'
})
export class AdminIssuesPageComponent implements OnInit{
  constructor(private issueService: IssuesService){}
  issueList :Issue[] = [];

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

}
