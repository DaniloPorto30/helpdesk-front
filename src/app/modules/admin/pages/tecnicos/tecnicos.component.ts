import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from 'src/app/shared/api.service';
import { Tecnico } from 'src/app/core/models/help.model';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.scss']
})
export class TecnicosComponent implements OnInit {

  empDetailt !: FormGroup;
  empObjt : Tecnico = new Tecnico();
  empListt : Tecnico[] = [];
  showAdd!: boolean;
  showbtn!: boolean;
  searchText!: string;
  p: number = 1;

  tecnicos = 'assets/img/experts.svg'

  constructor(private formBuilder : FormBuilder, private api : ApiService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.empDetailt = this.formBuilder.group({
      id : [''],
      name : [''],
      salary: [''],
      email: [''],
      cpf: ['',Validators.required],
      mobile: ['',Validators.required],
      endereco: ['',Validators.required],
      image:[''],
      login:[''],
      senha:[''],
      idade:[''],
      service:[''],
    });
    this.getAllTecnico();
  }

  addTecnico() {
    console.log(this.empDetailt);
    this.empObjt.id = this.empDetailt.value.id;
    this.empObjt.name = this.empDetailt.value.name;
    this.empObjt.cpf = this.empDetailt.value.cpf;
    this.empObjt.email = this.empDetailt.value.email;
    this.empObjt.endereco = this.empDetailt.value.endereco;
    this.empObjt.mobile = this.empDetailt.value.mobile;
    this.empObjt.salary = this.empDetailt.value.salary;
    this.empObjt.idade = this.empDetailt.value.idade;
    this.empObjt.senha = this.empDetailt.value.senha;
    this.empObjt.service = this.empDetailt.value.service;
    this.empObjt.login = this.empDetailt.value.login;
    this.empObjt.image = this.empDetailt.value.image;

    this.api.addTecnico(this.empObjt).subscribe(res=>{
        console.log(res);
 this.toastr.success('Adicionado com Sucesso!', 'Técnico');

        let ref = document.getElementById('clear');
        ref?.click();

        this.empDetailt.reset();
        this.getAllTecnico();
    },err=>{
      this.toastr.error('ao Adicionar Técnico!', 'Erro');
    });

  }

  getAllTecnico() {
    this.api.getAllTecnico().subscribe(
      (res : Tecnico[])=>{
        this.empListt = res;
    },err=>{
      console.log("error while fetching data.")
      this.toastr.error('ao Buscar Tecnicos!', 'Erro');
    });
  }

  editeTecnico(tec : Tecnico) {
    this.showAdd = false;
    this.showbtn = true;
    this.empDetailt.controls['id'].setValue(tec.id);
    this.empDetailt.controls['name'].setValue(tec.name);
    this.empDetailt.controls['email'].setValue(tec.email);
    this.empDetailt.controls['cpf'].setValue(tec.cpf);
    this.empDetailt.controls['mobile'].setValue(tec.mobile);
    this.empDetailt.controls['endereco'].setValue(tec.endereco);
    this.empDetailt.controls['salary'].setValue(tec.salary);
    this.empDetailt.controls['senha'].setValue(tec.senha);
    this.empDetailt.controls['idade'].setValue(tec.idade);
    this.empDetailt.controls['service'].setValue(tec.service);
    this.empDetailt.controls['login'].setValue(tec.login);
    this.empDetailt.controls['image'].setValue(tec.image);
  }

  updateTecnico() {

    this.empObjt.id = this.empDetailt.value.id;
    this.empObjt.name = this.empDetailt.value.name;
    this.empObjt.endereco = this.empDetailt.value.endereco;
    this.empObjt.email = this.empDetailt.value.email;
    this.empObjt.cpf = this.empDetailt.value.cpf;
    this.empObjt.mobile = this.empDetailt.value.mobile;
    this.empObjt.salary = this.empDetailt.value.salary;
    this.empObjt.idade = this.empDetailt.value.idade;
    this.empObjt.senha = this.empDetailt.value.senha;
    this.empObjt.service = this.empDetailt.value.service;
    this.empObjt.login = this.empDetailt.value.login;
    this.empObjt.image = this.empDetailt.value.image;

    this.api.updateTecnico(this.empObjt).subscribe(res=>{
     this.toastr.success('Atualizado com Sucesso!','Técnico');

      let ref = document.getElementById('clear');
      ref?.click();

      this.getAllTecnico();
    },err=>{
     this.toastr.error('ao Atualizar Técnico!', 'Erro');
    })

  }
  deleteTecnico(tec : Tecnico) {

    this.api.deleteTecnico(tec).subscribe(res=>{
        this.toastr.success('Deletado com Sucesso!','Técnico');
      this.getAllTecnico();
    },err => {
      console.log(err);
    });

  }

// Pegar todos os dados da Api e dar um refresh atualizando os dados da tela

//trocar formulario adicionar por editar
  clickAddtecnicos() {
    this.empDetailt.reset();
  }

// notificacao de sucesso ou erro
  showSucesso() {
    this.toastr.success('Sucesso ao Adicionar!', 'title');
  }
  showErro() {
    this.toastr.error('Erro!', 'title');
  }

}
