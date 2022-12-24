import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add', component: QuestionsComponent, data: {animation: 'isLeft'} },
  { path: 'quiz', component: QuizComponent, data: {animation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
