import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myInput: any;
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

  getUsers(searchbar){
    var query = searchbar.srcElement.value;
    if(!query){
      return;
    }

    this.users = this.users.filter((v) => {
      if(v.name && query){
        if(v.name.toLowerCase().indexOf(query.toLowerCase()) != -1){
          return true;
        }
        return false;
      }
    })
  }

}
