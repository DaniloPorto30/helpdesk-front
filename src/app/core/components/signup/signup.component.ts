import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';
import { Login } from '../../models/help.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loginForm!: FormGroup;
  empObjt : Login = new Login();
  empListt : Login[] = [];
  signup = 'assets/img/signup.svg'

  constructor(private toastr: ToastrService,
    private formBuilder:FormBuilder,
    private api : ApiService,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
     senha:['', Validators.required],
     name:['', Validators.required]
   });
  }
  addsignUp() {
    console.log(this.loginForm);
    this.empObjt.id = this.loginForm.value.id;
    this.empObjt.name = this.loginForm.value.name;
    this.empObjt.senha = this.loginForm.value.senha;
    this.empObjt.email = this.loginForm.value.email;

    this.api.addsignUp(this.empObjt).subscribe(res=>{
      this.api.getlogIn().subscribe(res=>{
        const user = res.find((a:Login)=>{
          return a.email === this.loginForm.value.email && a.senha === this.loginForm.value.senha
        })
        if(user){
          this.router.navigate(['home'])
          this.toastr.success('Sucesso ao Logar!');
        }else{
          this.toastr.error('Usuario não Encontrado!!');
          this.loginForm.reset();
        }
      },err=>{
        this.toastr.error('Algo está errado novamente, do lado do servidor!');
      }
      )

    });

  }

}
