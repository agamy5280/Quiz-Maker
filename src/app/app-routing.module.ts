import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { GenerateQuizComponent } from './generate-quiz/generate-quiz.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add', component: AddQuestionsComponent, data: {animation: 'isLeft'} },
  { path: 'quiz', component: GenerateQuizComponent, data: {animation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
