import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cat[]> {
    return this.http.get<Cat[]>('http://localhost:3000/cats');
  };
  create(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('http://localhost:3000/cats', Cat);

  }
  getById(id: number){
    return this.http.get(`http://localhost:3000/cats/${id}`);
  }
  edit(id: number){
    return this.http.get(`http://localhost:3000/cats/${id}`);
  }
  delete(id: number): Promise<any>{
    return fetch(`http://localhost:3000/cats/${id}`, {
      method: 'DELETE'
    });
  }
}
