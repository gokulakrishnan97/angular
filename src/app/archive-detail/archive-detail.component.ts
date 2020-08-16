import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { from } from 'rxjs';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {

  year: any;
  day: any;
  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.year = params.get('year');
        this.day = params.get('day');
      })
  }

  getAllArchive(){
    this.router.navigate([''])
  }

}
