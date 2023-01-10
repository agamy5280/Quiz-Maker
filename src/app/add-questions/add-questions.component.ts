import {Component} from '@angular/core';
import { form } from '../interfaces/form';
import { Form, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionArrayNamesService } from '../services/question-array-names.service';
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent{
  courseOptions: any = [];
  questionOptions: any [] = [];
  questionType: any [] = [];
  questionDifficulty: any [] = [];
  myForm: form = {} as form;
  constructor(private router: Router, private questionsArray: QuestionArrayNamesService) {
    this.courseOptions = this.questionsArray.courseOptions;
    this.questionOptions = this.questionsArray.questionOptions;
    this.questionType = this.questionsArray.questionType;
    this.questionDifficulty = this.questionsArray.questionDifficulty;
  }
  addQuestion = new UntypedFormGroup({
    courseName: new FormControl('', [Validators.required]),
    questionFormat: new FormControl('', [Validators.required]),
    questionType: new FormControl('', [Validators.required]),
    questionDifficulty: new FormControl('', [Validators.required]),
    questionTitle: new FormControl('', Validators.required),
    questionAnswer: new FormControl('', [Validators.required]),
  })
  print() {
    console.log(this.addQuestion.value);
  }
}
