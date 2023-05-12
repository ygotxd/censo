import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';
  cadastro = this.formBuilder.group({
    nome: '',
    email: ''});

  constructor( private formBuilder: FormBuilder){

  }
  
  mensagem(){
    window.alert("A mensagem");
  }


  onSubmit(){
    let obj = this.cadastro.value;
    console.log(this.cadastro.value);
    
    alert(obj.nome);
  }
}
