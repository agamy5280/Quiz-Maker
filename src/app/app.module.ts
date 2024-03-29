import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { GenerateQuizComponent } from './generate-quiz/generate-quiz.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberTemplateComponent } from './number-template/number-template.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import {GoTopButtonModule} from 'ng-go-top-button';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddQuestionsComponent,
    GenerateQuizComponent,
    QuotesComponent,
    NumberTemplateComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GoTopButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
