import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  warning: boolean = false;

  message: string = "";

  checkoutForm = this.formBuilder.group({
    username: '',
    content: ''
  })

  submitComment(): void {
    let comment: any = this.checkoutForm.getRawValue()
    comment['article_id'] = this.article.getId();
    comment['id'] = 0;

    if (comment['username'] === "")
    {
      this.warning = true
      this.message = "username cannot be empty"
      return;
    }

    if (comment['content'] === "")
    {
      this.warning = true;
      this.message = "Please fill out required forms!"
      return;
    }
    
    this.articleService.postComment(JSON.stringify(comment)).subscribe((com) => {
      let comments = this.article.getComments()
      comments.push(com);
      this.article.setComments(comments);
    })

    this.checkoutForm.reset();

  }

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  public article: Article = new Article("loading","loading", [], 0)

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id')
      console.log(id)
      this.articleService.getArticle(id).subscribe((item) => {
        this.article.setComments(item['comments']);
        this.article.setContent(item['content'])
        this.article.setId(item['id'])
        this.article.setTitle(item['title'])
      })
      console.log(this.article)
    })
  }
}
