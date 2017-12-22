import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  public log:Array<any>=[];

  constructor(public navCtrl: NavController) {

  }
  
  saveData(){
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

    this.log.push(log);
    localStorage.setItem('myData',JSON.stringify(this.log));
    this.patientid='';
    this.name='';
    this.fname='';
    this.mname='';
    this.gender='';
    this.email='';
    this.bloodgroup='';
    this.mobileno='';
    console.log('login',this.log);
  }

/*send(){
  let data = {"demo": "demo"};
  localStorage.setItem('myData',JSON.stringify(data));
}*/

}