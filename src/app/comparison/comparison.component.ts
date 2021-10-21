import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo';
import { Input } from '@angular/core';
@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
photoid!:any;
@Input() p!:Photo;
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(res=>{
  this.photoid=res;
 
    })
   }

  ngOnInit(): void {
  }

}
