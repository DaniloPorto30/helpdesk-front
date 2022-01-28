import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/core/models/help.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes = 'assets/img/settings.svg'


  empDetailc !: FormGroup;
  empObjc : Cliente = new Cliente();
  empListc : Cliente[] = [];
  showAdd!: boolean;
  showbtn!: boolean;
  searchText!: string;
  p: number = 1;

  constructor(private formBuilder : FormBuilder, private apiService : ApiService,
  private toastr: ToastrService) { }

  ngOnInit(): void {

    this.empDetailc = this.formBuilder.group({
      id : [''],
      name : [''],
      email: [''],
      cpf: [''],
      mobile: [''],
      endereco: [''],
      image:[''],
      login:[''],
      senha:[''],
    });
    this.getAllCliente();
  }

  addCliente() {
    console.log(this.empDetailc);
    this.empObjc.id = this.empDetailc.value.id;
    this.empObjc.name = this.empDetailc.value.name;
    this.empObjc.email = this.empDetailc.value.email;
    this.empObjc.login = this.empDetailc.value.login;
    this.empObjc.endereco = this.empDetailc.value.endereco;
    this.empObjc.mobile = this.empDetailc.value.mobile;
    this.empObjc.image = this.empDetailc.value.image;
    this.empObjc.cpf = this.empDetailc.value.cpf;
    this.empObjc.senha = this.empDetailc.value.senha;

    this.apiService.addCliente(this.empObjc).subscribe(res=>{
        console.log(res);
      this.toastr.success('Adicionado com Sucesso!', 'Cliente');

        let ref = document.getElementById('clear');
        ref?.click();

        this.empDetailc.reset();
        this.getAllCliente();
    },err=>{
      this.toastr.error('ao Adicionar Cliente!', 'Erro');
    });

  }

  getAllCliente() {
    this.apiService.getAllCliente().subscribe(
      (res : Cliente[])=>{
        this.empListc = res;
    },err=>{
      console.log("error while fetching data.")
      this.toastr.error('ao Buscar Clientes!', 'Erro');
    });
  }

  editeCliente(cli : Cliente) {
    this.empDetailc.controls['id'].setValue(cli.id);
    this.empDetailc.controls['name'].setValue(cli.name);
    this.empDetailc.controls['email'].setValue(cli.email);
    this.empDetailc.controls['cpf'].setValue(cli.cpf);
    this.empDetailc.controls['endereco'].setValue(cli.endereco);
    this.empDetailc.controls['mobile'].setValue(cli.mobile);
    this.empDetailc.controls['image'].setValue(cli.image);
    this.empDetailc.controls['senha'].setValue(cli.senha);
    this.empDetailc.controls['login'].setValue(cli.login);

  }

  updateCliente() {

    this.empObjc.id = this.empDetailc.value.id;
    this.empObjc.name = this.empDetailc.value.name;
    this.empObjc.email = this.empDetailc.value.email;
    this.empObjc.login = this.empDetailc.value.login;
    this.empObjc.endereco = this.empDetailc.value.endereco;
    this.empObjc.mobile = this.empDetailc.value.mobile;
    this.empObjc.image = this.empDetailc.value.image;
    this.empObjc.cpf = this.empDetailc.value.cpf;
    this.empObjc.senha = this.empDetailc.value.senha;

    this.apiService.updateCliente(this.empObjc).subscribe(res=>{
      this.toastr.success('Atualizado com Sucesso!','Cliente');

      let ref = document.getElementById('clear');
      ref?.click();

      this.getAllCliente();
    },err=>{
      this.toastr.error('ao Atualizar Cliente!', 'Erro');
    })

  }
  deleteCliente(cli : Cliente) {

    this.apiService.deleteCliente(cli).subscribe(res=>{
         this.toastr.success('Deletado com Sucesso!','Cliente');
      this.getAllCliente();
    },err => {
      console.log(err);
    });

  }
  clickAddclientes() {
    this.empDetailc.reset();
  }

// notificacao de sucesso ou erro
  showSucesso() {
    this.toastr.success('Sucesso ao Adicionar!', 'title');
  }
  showErro() {
    this.toastr.error('Erro!', 'title');
  }

}
