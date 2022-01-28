import { ApiService } from './../../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../../models/help.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 login = "/src/assets/img/login.svg"
 loginForm!: FormGroup;

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private formBuilder:FormBuilder,private toastr: ToastrService,
     private router: Router, private api : ApiService
    ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
     senha:['', Validators.required]
  })
  }

  getlogIn(){
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

      }
  open(content: any) {
    this.modalService.open(content);
  }

  }
