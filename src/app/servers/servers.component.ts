import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  dispStatus=false;
  dispArrs:number[]=[1];
  incN=1;

  constructor() { }

  ngOnInit(): void {
  }


  toggleDisplay() {
    this.incN+=1;
    this.dispArrs.push(this.incN);
    if(this.dispStatus==false){
      this.dispStatus=true;
    }
    else {
      this.dispStatus=false;
    }
  }

  getCol() {
    if(this.incN>5) {
      return 'blue';
    }
  }

  getSty() {
    if(this.incN > 5) {
      return true;
    }
  }

}
