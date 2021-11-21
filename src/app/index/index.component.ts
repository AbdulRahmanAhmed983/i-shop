import { Component, OnInit } from '@angular/core';
declare var next:any;
 declare var prev:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new next();
    new prev();
  }

}
