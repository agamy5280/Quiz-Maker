import { Component, OnChanges, OnInit} from '@angular/core';
import { form } from '../interfaces/form';
import { FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionArrayNamesService } from '../services/question-array-names.service';
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnChanges,OnInit{
  courseOptions: any = [];
  questionOptions: any [] = [];
  questionType: any [] = [];
  questionDifficulty: any [] = [];
  myForm: form = {} as form;
  limit: number = 0 ;
  selectedIndexMCQ: number;
  selectedIndexTF: number;
  constructor(private router: Router, private questionsArray: QuestionArrayNamesService, private fb: FormBuilder ) {
    // getting data from QuestionArrayNamesService
    this.courseOptions = this.questionsArray.courseOptions;
    this.questionOptions = this.questionsArray.questionOptions;
    this.questionType = this.questionsArray.questionType;
    this.questionDifficulty = this.questionsArray.questionDifficulty;
  }
  ngOnInit(): void {
    // clearing data when changing questionFormat
    this.addQuestion.get('questionFormat').valueChanges.subscribe(val =>{
      if(this.addQuestion.controls['questionFormat'].value != 'MCQ'){
        this.addQuestion.get('questionAnswer').setValidators(Validators.required);
        this.addQuestion.get('questionOptionsMCQ').clearValidators();

      }else if (this.addQuestion.controls['questionFormat'].value == 'MCQ'){
        this.addQuestion.get('questionAnswer').clearValidators();
        this.addQuestion.get('questionOptionsMCQ').setValidators(Validators.required);
        this.addQuestion.get('questionAnswer').setValue('');
      }
    })
  }
  ngOnChanges() {
  }
  //FormGroup
  addQuestion = this.fb.group({
    courseName: new FormControl('', [Validators.required]),
    questionFormat: new FormControl('', [Validators.required]),
    questionType: new FormControl('', [Validators.required]),
    questionDifficulty: new FormControl('', [Validators.required]),
    questionTitle: new FormControl('', [Validators.required]),
    questionAnswer: new FormControl(''),
    questionOptionsMCQ: this.fb.array([]),
  })
  get questionOptionsMCQ() {
    return this.addQuestion.get("questionOptionsMCQ") as FormArray;
  }
  // Nesting formgroup
  addNewOption() {
      const newOption = this.fb.group({
        question: new FormControl('',[Validators.required]),
        answer: new FormControl(false),
      });
      this.questionOptionsMCQ.push(newOption);
      this.limit++;
  }
  // Function to make checkbox be selected once
  changeSelectionCheckBoxMCQ(event, index) {
    this.selectedIndexMCQ = event.target.checked ? index : undefined;
  }
  // Function to make checkbox be selected once
  changeSelectionCheckBoxTF(event, index) {
    this.selectedIndexTF = event.target.checked ? index : undefined;
  }
  print() {
    // resetting questionOptionsMCQ array if coming from other question format to MCQ
    if(this.addQuestion.controls['questionFormat'].value == 'MCQ') {
      console.log(this.addQuestion.value);
    }else {
      this.addQuestion.controls['questionOptionsMCQ'].reset();
      console.log(this.addQuestion.value);
    }
  }
}
