import { Component, ViewEncapsulation  } from '@angular/core';
import { QuestionArrayNamesService } from '../services/question-array-names.service';
import { Form, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-generate-quiz',
  templateUrl: './generate-quiz.component.html',
  styleUrls: ['./generate-quiz.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class GenerateQuizComponent {
  courseOptions: any = [];
  questionOptions: any [] = [];
  questionType: any [] = [];
  questionDifficulty: any [] = [];

  constructor(private questionsArray: QuestionArrayNamesService){
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
  })
  print() {
    console.log(this.addQuestion.value);
  }
}
