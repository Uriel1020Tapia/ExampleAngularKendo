import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';

/* File config UrlBase*/
import { URL_BACKEND } from '../config/config';
import { Cliente } from '../main/homegrid/posts';

@Injectable({
  providedIn: 'root',
})
export class MainService {

    private baseUrl = URL_BACKEND;

    constructor(private http: HttpClient, private router: Router) { }


    getPosts(): Observable<any> {
        return this.http.get(this.baseUrl + 'posts').pipe(
            map(
                  (response: Response) => {
                    console.log(response)
                    const data = response;
                    console.log(data);
                    return data;
                  }
                ), catchError(
                  (error: Response) => throwError(`Hubo un error en la búsqueda: ${error}`)
                )
              );
    }
}
