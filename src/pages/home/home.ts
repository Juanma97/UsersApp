import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];

  constructor(public navCtrl: NavController, public userServiceProvider: UserServiceProvider) {

  }

  ionViewDidLoad(){
    this.userServiceProvider.getUsers()
    .subscribe((data) => {
      this.users = data['results'];
    },
    (error) => {
      console.log(error);
    }
    )
  }

}
