import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemcounter : number = 0;
  projecttext : string ="Angular Project";
  projects : string[] =[];

  ngOnInit(){
    this.itemcounter=this.projects.length;
  }

  additem(){
    this.projects.push(this.projecttext);
    
    this.itemcounter=this.projects.length;
    this.projecttext="";
  }
  removeitem(i : number){
    // this.project.pop();
    this.projects.splice(i,1);
    this.itemcounter=this.projects.length;
  }


}
