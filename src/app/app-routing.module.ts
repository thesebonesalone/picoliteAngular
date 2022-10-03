import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ArticleaddComponent } from './articleadd/articleadd.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'edit/:id', component: ArticleaddComponent},
  {path: 'about', component: AboutComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
