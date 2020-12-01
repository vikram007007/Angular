import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  createStatus = 'No server was created';
  serverName='';
  setServer=false;
  servers = ['vikram'];
  

  constructor() { 
    // setTimeout(()=>{
    //   this.allowNewServer=true;
    // },2000)
  }

  ngOnInit(): void {
  }
  
  onCreate() {
   if ((this.serverName==''||this.serverName==null)){
      return this.allowNewServer=true;
   }
  }

  onAdd() {
    this.setServer=true;
    this.servers.push(this.serverName);
    this.createStatus = 'Server is created with name '+ this.serverName;
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetName() {
    this.serverName='';
  }

}
