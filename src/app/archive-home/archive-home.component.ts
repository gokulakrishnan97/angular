import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.css']
})
export class ArchiveHomeComponent implements OnInit {

  archives = [
    {
      date:1,
      year:2020
    },
    {
      date:2,
      year:2020
    },
    {
      date:3,
      year:2020
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
