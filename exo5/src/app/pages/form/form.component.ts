import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CatService } from 'src/app/services/cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private catService: CatService,
    private router: Router
    ) { 
    this.form = this.formBuilder.group({
      name: [''],
      race: [''],
      age: [''],
      isAlive: ['']
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.catService.create(this.form.value).subscribe(()=>{
      this.router.navigate(['/cat'])
    });
  }

}
