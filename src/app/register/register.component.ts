import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name=""
  address=""
  phone=""
  mail=""
  dob=""
  username=""
  password=""
  confirm=""

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.phone,"mail":this.mail,"dob":this.dob,"username":this.username,"passwrod":this.password,"confirm":this.confirm}
    console.log(data)
  }



}
