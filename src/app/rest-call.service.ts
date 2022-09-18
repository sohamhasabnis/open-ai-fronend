import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestCallService {
  constructor(private http: HttpClient) {}

  async getBlogIdeaDetailsService(text: string, command: string) {
    let param = new HttpParams().set('text', text).set('command', command);
    let data = '';
    await this.http
      .get<any>('https://open-ai-project-test.herokuapp.com/ideas', { params: param })
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
      .get<any>('https://open-ai-project-test.herokuapp.com/get-blog/article', { params: param })
      .toPromise()
      .then((value) => {
        data = value.text;
      });
    return data;
  }
}
