import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  id: number;
  public patientid:any;
  public name:any;
  public fname:any;
  public mname:any;
  public gender:any;
  public email:any;
  public bloodgroup:any;
  public mobileno:any;
  
  constructor(public navCtrl: NavController) {
    let data = JSON.parse(localStorage.getItem('myData'));
    console.log("Did data load? : ",data);
    this.patientid=data[0].patientid;
    this.name=data[0].name;
    this.fname=data[0].fname;
    this.mname=data[0].mname;
    this.gender=data[0].gender;
    this.email=data[0].email;
    this.bloodgroup=data[0].bloodgroup;
    this.mobileno=data[0].mobileno;
  }
  ionViewWillEnter() {
    let data = JSON.parse(localStorage.getItem('myData'));
  }
}
