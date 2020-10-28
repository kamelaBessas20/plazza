import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users = [];
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      nom: ['userN1', Validators.required],
      prenom: ['userP1', Validators.required],
      age: ['5', Validators.required],
      catsList: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ]),
      users: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ]),

      adresse: this.formBuilder.group({
        rue: ['paris', Validators.required],
        numero: ['30', Validators.required],
        ville: ['paris', Validators.required]
      }),
  });
   }
  
   onSubmit(){
    console.log(this.userForm.value);
  }
  get catsList(){
    return this.userForm.get('catsList') as FormArray;
  }
  ajouterUnChat(){
    return this.catsList.push(this.formBuilder.control(''));
  }
  ajouterUnUser () {
    return this.users.push(this.formBuilder.control(''));
  }
  ngOnInit(): void {
  }

}
