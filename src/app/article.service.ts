import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Article } from './models/article';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private urlBase = 'http://localhost:8081/articles'

  private httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})}

  constructor(private httpClient: HttpClient) { }


  //get one
  getArticle(id: any): Observable<Article> {
      return this.httpClient.get<Article>(this.urlBase + "/" + id)
  }
     
  //post
  saveArticle(article: Article) {
    let Json: string = JSON.stringify(article);
    console.log(Json);
    return this.httpClient.post<string>(this.urlBase + "/",Json,this.httpOptions)
  }

  //delete
  deleteArticle(id: number) {
    this.httpClient.delete(this.urlBase + "/" + id, this.httpOptions).subscribe();
  }

  //get all
  getAllArticles(): Article[] {
    let articles: Article[] = []
    this.httpClient.get<Article[]>(this.urlBase, this.httpOptions).subscribe((article) => {
      article.forEach((art) => {
        
        articles.push(this.toArticle(art));
      })
    })
    console.log(articles)
    return articles;
  }

  postComment(comment: string) : Observable<any> {
    return this.httpClient.post('http://localhost:8081/comments', comment, this.httpOptions)
  }

  toArticle(art: any): Article {
    return new Article(art["title"], art["content"], art["comments"], art["id"]);
  }
}
