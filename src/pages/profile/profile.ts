import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'profile.html'
})

export class ProfilePage {

    public username:any;
    public password:any;
    public posts:Array<any>;
    
    constructor(public navCtrl: NavController,public events: Events,public http: Http) {

    }
}