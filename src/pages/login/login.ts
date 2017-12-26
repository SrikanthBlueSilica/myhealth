import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {

  public username:any;
  public password:any;


  constructor(public navCtrl: NavController,public events: Events) {}

  changePage(event) {
    // Sharing data using NavController
    this.navCtrl.push(HomePage, {
    
    });
    this.username='';
    this.password='';
    var log = document.getElementById("cheking");
    log.setAttribute("disabled","disabled");
  } 

  login() {
    var log = document.getElementById("cheking");
    if(this.username==''||this.username==null||this.password==''||this.password==null||
    this.username!='srikanth'||this.password!='sri123') {
      log.setAttribute("disabled","disabled");
    } else  {
      log.removeAttribute("disabled");
    }
  }
  clean(){
    
  }
}