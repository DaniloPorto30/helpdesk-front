import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/core/models/help.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  chamados = 'assets/img/suport.svg'
  today= new Date();

  empDetailch !: FormGroup;
  empObjch : Chamado = new Chamado();
  empListch : Chamado[] = [];
  showAdd!: boolean;
  showbtn!: boolean;
  searchText!: string;
  p: number = 1;

  tecnicos = 'assets/img/experts.svg'

  constructor(private formBuilder : FormBuilder, private apiService : ApiService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.empDetailch = this.formBuilder.group({
      id : [''],
      name : [''],
      email: [''],
      cpf: [''],
      mobile: [''],
      endereco: [''],
      image:[''],
      descricao:[''],
    });
    this.getAllChamado();
  }

  addChamado() {
    console.log(this.empDetailch);
    this.empObjch.id = this.empDetailch.value.id;
    this.empObjch.name = this.empDetailch.value.name;
    this.empObjch.cpf = this.empDetailch.value.cpf;
    this.empObjch.email = this.empDetailch.value.email;
    this.empObjch.endereco = this.empDetailch.value.endereco;
    this.empObjch.mobile = this.empDetailch.value.mobile;
    this.empObjch.descricao = this.empDetailch.value.service;
    this.empObjch.image = this.empDetailch.value.image;


    this.apiService.addChamado(this.empObjch).subscribe(res=>{
        console.log(res);
 this.toastr.success('Adicionado com Sucesso!', 'Técnico');

        let ref = document.getElementById('clear');
        ref?.click();

        this.empDetailch.reset();
        this.getAllChamado();
    },err=>{
      this.toastr.error('ao Adicionar Chamado!', 'Erro');
    });

  }

  getAllChamado() {
    this.apiService.getAllChamado().subscribe(
      (res : Chamado[])=>{
        this.empListch = res;
    },err=>{
      console.log("error while fetching data.")
      this.toastr.error('ao Buscar Tecnicos!', 'Erro');
    });
  }

  editeChamado(cha : Chamado) {
    this.empDetailch.controls['id'].setValue(cha.id);
    this.empDetailch.controls['name'].setValue(cha.name);
    this.empDetailch.controls['email'].setValue(cha.email);
    this.empDetailch.controls['cpf'].setValue(cha.cpf);
    this.empDetailch.controls['mobile'].setValue(cha.mobile);
    this.empDetailch.controls['endereco'].setValue(cha.endereco);
    this.empDetailch.controls['descricao'].setValue(cha.descricao);
    this.empDetailch.controls['image'].setValue(cha.image);

  }

  updateChamado() {

    this.empObjch.id = this.empDetailch.value.id;
    this.empObjch.name = this.empDetailch.value.name;
    this.empObjch.endereco = this.empDetailch.value.endereco;
    this.empObjch.email = this.empDetailch.value.email;
    this.empObjch.cpf = this.empDetailch.value.cpf;
    this.empObjch.mobile = this.empDetailch.value.mobile;
    this.empObjch.descricao = this.empDetailch.value.descricao;
    this.empObjch.image = this.empDetailch.value.image;

    this.apiService.updateChamado(this.empObjch).subscribe(res=>{
     this.toastr.success('Atualizado com Sucesso!','Técnico');

      let ref = document.getElementById('clear');
      ref?.click();

      this.getAllChamado();
    },err=>{
     this.toastr.error('ao Atualizar Técnico!', 'Erro');
    })

  }
  deleteChamado(cha : Chamado) {

    this.apiService.deleteChamado(cha).subscribe(res=>{
        this.toastr.success('Deletado com Sucesso!','Técnico');
      this.getAllChamado();
    },err => {
      console.log(err);
    });

  }

// Pegar todos os dados da Api e dar um refresh atualizando os dados da tela

//trocar formulario adicionar por editar
  clickAddChamados() {
    this.empDetailch.reset();
  }

// notificacao de sucesso ou erro
  showSucesso() {
    this.toastr.success('Sucesso ao Adicionar!', 'title');
  }
  showErro() {
    this.toastr.error('Erro!', 'title');
  }


}
