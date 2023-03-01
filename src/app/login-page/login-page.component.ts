import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  errormsg:string=''
  
  // Login Form
  LoginForm= this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  // Register Form
  RegisterForm= this.fb.group({
    mailId:['',[Validators.required,Validators.pattern('[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
  constructor(private fb:FormBuilder, private api:ApiService, private router:Router){}

 // login
 login(){
  if(this.LoginForm.valid){
    let uname=this.LoginForm.value.uname
    let pswd=this.LoginForm.value.pswd
this.api.login(uname,pswd)
.subscribe((result:any)=>{
alert(result.message) 

// setting username in localtorage
localStorage.setItem("username",result.username)
this.router.navigateByUrl('AllMovies')
},
(result:any)=>{
this.errormsg=result.error.message
}
)
  } 
  else
  {
    alert('invalid')
  }
}

  // register
  register(){
    if(this.RegisterForm.valid){
      let mailId=this.RegisterForm.value.mailId
      let uname=this.RegisterForm.value.uname
      let pswd=this.RegisterForm.value.pswd
this.api.register(mailId,uname,pswd)
.subscribe((result:any)=>{
  alert(result.message) 
  window.location.reload();
this.router.navigateByUrl('')
},
(result:any)=>{
  alert(result.error.message)
}
)
    } 
    else
    {
      alert('invalid Form')
    }
  }


  onEdit(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }}


