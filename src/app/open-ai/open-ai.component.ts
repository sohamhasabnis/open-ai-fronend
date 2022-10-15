import { Component, OnInit } from '@angular/core';
import { RestCallService } from '../rest-call.service';

@Component({
  selector: 'app-open-ai',
  templateUrl: './open-ai.component.html',
  styleUrls: ['./open-ai.component.css'],
})
export class OpenAiComponent implements OnInit {
  q1InputText1: string = '';
  q1InputText2: string = 'Generate blog topics on: ';
  q1InputText3: string = '';
  q2InputText1: string = '';
  q2InputText2: string =
    'Expand the blog title in to high level blog sections: ';
  q2InputText3: string = '';
  q3InputText1: string = '';
  q3InputText2: string = 'write a professional article on: ';
  q3InputText3: string = '';
  loadingBtn1: boolean = false;
  loadingBtn2: boolean = false;
  loadingBtn3: boolean = false;
  characterlength: number = 500;
  constructor(private rest: RestCallService) {}

  ngOnInit(): void {}

  async getBlogIdeaDetails() {
    this.loadingBtn1 = true;
    console.log(""+this.loadingBtn1)
    this.q1InputText3 = (
      await this.rest.getBlogIdeaDetailsService(
        this.q1InputText1,
        this.q1InputText2
      )
    ).trim();
    this.loadingBtn1 = false;
    console.log(this.q1InputText3);
  }

  async getBlodIdeaSection() {
    this.loadingBtn2 = true;
    this.q2InputText3 = (
      await this.rest.getBlogIdeaDetailsService(
        this.q2InputText1,
        this.q2InputText2
      )
    ).trim();
    this.loadingBtn2 = false;
  }
  async getBlogArticle() {
    this.loadingBtn3= true;
    this.q3InputText3 = (
      await this.rest.getBlogArticle(
        this.q3InputText1,
        this.q3InputText2,
        this.characterlength
      )
    ).trim();
    this.loadingBtn3 = false;
  }
}
