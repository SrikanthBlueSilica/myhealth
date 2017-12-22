import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  public patientid:any;
  public name:any;
  public fname:any;
  public mname:any;
  public gender:any;
  public email:any;
  public bloodgroup:any;
  public mobileno:any;
  parameter1: string;
  parameter2: string;
  
  constructor(public navCtrl: NavController,public events: Events,public navParams: NavParams) {

    this.parameter1 = navParams.get('param1'); 
    this.parameter2 = navParams.get('param2');

    this.patientid=navParams.get('patientid');
    this.name=navParams.get('name');
    this.fname=navParams.get('fname');
    this.mname=navParams.get('mname');
    this.gender=navParams.get('gender');
    this.email=navParams.get('email');
    this.bloodgroup=navParams.get('bloodgroup');
    this.mobileno=navParams.get('mobileno');

    /*let data = JSON.parse(localStorage.getItem('myData'));
    console.log("Did data load? : ",data);
    this.patientid=data[1].patientid;
    this.name=data[1].name;
    this.fname=data[1].fname;
    this.mname=data[1].mname;
    this.gender=data[1].gender;
    this.email=data[1].email;
    this.bloodgroup=data[1].bloodgroup;
    this.mobileno=data[1].mobileno;*/
  }
}
