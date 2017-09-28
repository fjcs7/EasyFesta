import { Anuncio } from './anuncio.class';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AnuncioService {

  constructor (private http: Http) {}

  getAnuncios(): Observable<Anuncio[]>{

      let options: Object = this.getHeaders();
      let anuncios = this.http      
      .get(`http://localhost:3000/api/anuncios`, options)
      .map((res:Response) => res.json());
      return anuncios;
  }

  addAnuncio(anuncio: Anuncio) {
      let body = JSON.stringify(anuncio);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:3000/api/anuncio`, body, options).map((res: Response) => res.json());
  }

  removeAnuncio(id: Number) {
    let body = id.toString();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`http://localhost:3000/api/anuncio/`+body, options).map((res: Response) => res.json());
    
  }

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }

}