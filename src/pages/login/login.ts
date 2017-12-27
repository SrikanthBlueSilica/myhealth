import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {

  public username:any;
  public password:any;
  public posts:Array<any>;

  constructor(public navCtrl: NavController,public events: Events,public http: Http) {
 
  }

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
    this.http.get('assets/patient.json').map(res => res.json()).subscribe(data => {
      this.posts = data;
      console.log("server",this.posts);
      for(let i=0; i<this.posts.length; i++) {
        if(this.username==''||this.username==null||this.password==''||this.password==null||
        this.username!=this.posts[i].username||this.password!=this.posts[i].password) {
          log.setAttribute("disabled","disabled");
        } else  {
          log.removeAttribute("disabled");
          break;
        }
      }
    });
  }
}