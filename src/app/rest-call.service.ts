import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestCallService {
  constructor(private http: HttpClient) {}

  async getBlogIdeaDetailsService(text: string, command: string) {
    let param = new HttpParams().set('text', text).set('command', command);
    let headersReq = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    });
    let data = '';
    console.log(headersReq);
    await this.http
      .get<any>('https://open-api-test-f1.herokuapp.com/ideas', {headers:headersReq, params: param })
      .toPromise()
      .then((value) => {
        data = value.text;
      });
    return data;
  }

  async getBlogArticle(text: string, command: string, character: number) {
    let param = new HttpParams()
      .set('text', text)
      .set('command', command)
      .set('characterLimit', character);
    let data = '';
    await this.http
      .get<any>('https://open-api-test-f1.herokuapp.com/get-blog/article', { params: param })
      .toPromise()
      .then((value) => {
        data = value.text;
      });
    return data;
  }
}
