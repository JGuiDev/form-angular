import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

    userForm!: FormGroup;

  ngOnInit():void {
      this.userForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        profession: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      })
  }

  get firstName(){
    return this.userForm.get('firstName')!;
  }

  get lastName(){
    return this.userForm.get('lastName')!;
  }

  get profession(){
    return this.userForm.get('profession')!;
  }

  submit(){
    if(this.firstName.invalid || this.lastName.invalid || this.profession.invalid){
      console.log("Erro ao enviar o formulário");
    }
    else{
      this.messagesService.add('Formulário enviado com sucesso!');
      this.redirect();
    }
  }
  
  redirect(){
    setTimeout(()=>{
      this.router.navigate(['/'])
    },2000)
  }

  constructor(private router: Router, private messagesService: MessageServiceService ){  }

  url = "https://via.placeholder.com/100"

  onselectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) =>{
        this.url= event.target.result;
      }
    }
  }
}
