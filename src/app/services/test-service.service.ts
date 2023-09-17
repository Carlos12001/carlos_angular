import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) { }
  //devuelve todos los asientos
  getAsientos(): Observable<string[]> {
    return this.http.get<string[]>("https://localhost:44342");
  }

}

