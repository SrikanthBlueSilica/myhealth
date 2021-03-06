import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public patientid:any;
  public name:any;
  public fname:any;
  public mname:any;
  public gender:any;
  public email:any;
  public bloodgroup:any;
  public mobileno:any;
  public dummy:Array<any>=[];

  public posts: any;

  constructor(public navCtrl: NavController,public events: Events,public http: Http) {
    
  }

  changePage(event) {
    // Sharing data using NavController
    this.navCtrl.push(AboutPage, {
        param1: 'John', param2: 'Johnson'
    });
} 

disable() {
  var check = document.getElementById("check");
  if(this.patientid==''||this.patientid==null||this.name==''||this.name==null||
  this.fname==''||this.fname==null||this.mname==''||this.mname==null||
  this.email==''||this.email==null||this.gender==''||this.gender==null ||this.bloodgroup==''||
  this.bloodgroup==null || this.mobileno==''||this.mobileno==null) {
    check.setAttribute("disabled","disabled");
  } else  {
    check.removeAttribute("disabled");
  }
}
  
  saveData(event) {
    this.navCtrl.push(AboutPage, {
      patientid:this.patientid,
      name:this.name,
      fname:this.fname,
      mname:this.mname,
      gender:this.gender,
      email:this.email,
      bloodgroup:this.bloodgroup,
      mobileno:this.mobileno
  });

    var log={
      patientid:this.patientid,
      name:this.name,
      fname:this.fname,
      mname:this.mname,
      gender:this.gender,
      email:this.email,
      bloodgroup:this.bloodgroup,
      mobileno:this.mobileno
    }
   
   this.dummy.push(log);
   console.log('login',this.dummy);
  }

  clean() {
    this.patientid='';
    this.name='';
    this.fname='';
    this.mname='';
    this.gender='';
    this.email='';
    this.bloodgroup='';
    this.mobileno='';
    var check = document.getElementById("check");
    check.setAttribute("disabled","disabled");
  }
}