import { PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Photo } from './photo';
import { Router } from '@angular/router';
import { PhotoService } from './photo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ektaapp';
  photo!: Photo[];
  photoid!:number;
  constructor(private pphoto:PhotoService,private router:Router) { }
  ngOnInit() {
this.getphoto();
  }
  toggle(id:any){
this.router.navigate(['/compare', id]);
  }
  getphoto(){
this.pphoto.getPhotos().subscribe(res=>{
this.photo=res;
})
  }

}
