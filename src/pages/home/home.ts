import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public name:any;
  public sname:any;
  public password:any;
  public spassword:any;
  public rspassword:any;
  public log:Array<any>=[];
  public signup:Array<any>=[];
  
  constructor(public navCtrl: NavController) {

  }

  login(){
    var log={
      name:this.name,
      password:this.password
    }
    this.log.push(log);
    this.name='';
    this.password='';
    console.log('login',this.log);
  }
  sign(){
    var sign = {
      sname:this.sname,
      spassword:this.spassword
    }
    this.signup.push(sign);
    this.sname='',
    this.spassword=''
    this.rspassword=''
    console.log('signup',this.signup);
  }
}