import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-articleadd',
  templateUrl: './articleadd.component.html',
  styleUrls: ['./articleadd.component.css']
})
export class ArticleaddComponent implements OnInit {

  public article: Article = new Article("","",[],0)

  checkoutForm = this.formBuilder.group({
    title: "",
    content: ""
  })

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get("id") != "0")
      {
        this.articleService.getArticle(params.get('id')).subscribe((item) => {
          this.article.setComments(item['comments']);
          this.article.setContent(item['content'])
          this.article.setId(item['id'])
          this.article.setTitle(item['title'])
          this.checkoutForm = this.formBuilder.group({
            title: this.article.getTitle(),
            content: this.article.getContent()
          })
          console.log(this.article)
        })
      }
    })
  }

  deleteArticle()
  {
    this.articleService.deleteArticle(this.article.getId());
    this.router.navigate(['/'])
  }

  submitArticle(): void {
    let newArticle: any = this.checkoutForm.getRawValue();

    this.article.setContent(newArticle.content);
    this.article.setTitle(newArticle.title)
    
    console.log(this.article)
    let id = 0;
    this.articleService.saveArticle(this.article).subscribe((e: any) => {
      id = e['id']
      this.router.navigate(['/article/' + id])
    });
  }

}
