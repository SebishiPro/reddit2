import { Component, HostBinding, OnInit,Input } from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.clss') cssClass = 'row';
  @Input()
  article!: Article;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  voteUP(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDOWN(): boolean{
    this.article.voteDown();
    return false;
  }
}
