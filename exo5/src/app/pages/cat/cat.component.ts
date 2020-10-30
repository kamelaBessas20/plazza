import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Cat } from 'src/app/models/Cat';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cats: Cat[]= [];
  constructor(private catService: CatService) { 
    this.catService.findAll().subscribe(data => {
      this.cats = data;
      console.log(this.cats);
    })
  }

  ngOnInit(): void {
  }

}
