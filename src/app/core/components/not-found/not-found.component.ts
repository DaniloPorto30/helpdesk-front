import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  not_found = 'assets/img/not_found.svg'
  
  constructor() { }

  ngOnInit(): void {
  }

}
