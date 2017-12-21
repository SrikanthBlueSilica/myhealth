import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public name:any;
  public password:any;
  public log:Array<any>=[];
  
  constructor(public navCtrl: NavController) {

  }

  login(){
    var log={
      name:this.name,
      password:this.password
    }
    this.log.push(log);
    console.log('saved',this.log);
  }
}