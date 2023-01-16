import {Component, OnChanges, OnInit} from '@angular/core';
import { form } from '../interfaces/form';
import { Form, FormControl, FormGroup, UntypedFormArray, UntypedFormGroup, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
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
    this.courseOptions = this.questionsArray.courseOptions;
    this.questionOptions = this.questionsArray.questionOptions;
    this.questionType = this.questionsArray.questionType;
    this.questionDifficulty = this.questionsArray.questionDifficulty;
  }
  ngOnInit(): void {
    
  }
  ngOnChanges() {
    this.addQuestion.get('questionFormat').valueChanges.subscribe(val =>{
      if(this.addQuestion.controls['questionFormat'].value != 'MCQ'){
        this.addQuestion.controls['questionAnswer'].clearValidators();
      }else if (this.addQuestion.controls['questionFormat'].value == 'MCQ'){
        this.questionOptionsMCQ.controls['question'].clearValidators();
      }
    })
  }
  addQuestion = this.fb.group({
    courseName: new FormControl('', [Validators.required]),
    questionFormat: new FormControl('', [Validators.required]),
    questionType: new FormControl('', [Validators.required]),
    questionDifficulty: new FormControl('', [Validators.required]),
    questionTitle: new FormControl('', [Validators.required]),
    questionAnswer: new FormControl('',[Validators.required]),
    questionOptionsMCQ: this.fb.array([]),
  })
  // addQuestion = new UntypedFormGroup({
  //   courseName: new FormControl('', [Validators.required]),
  //   questionFormat: new FormControl('', [Validators.required]),
  //   questionType: new FormControl('', [Validators.required]),
  //   questionDifficulty: new FormControl('', [Validators.required]),
  //   questionTitle: new FormControl('', Validators.required),
  //   questionAnswer: new FormControl('', [Validators.required]),
  //   // questionOptionsMCQ: new FormControl([],[Validators.required]),
  //   questionOptionsMCQ: new UntypedFormArray([])
  // })
  // adminForm = this.fb.group({
  //   question: new FormControl('', [Validators.required]),
  //   Answer: new FormControl(''),
  // });

  get questionOptionsMCQ() {
    return this.addQuestion.get("questionOptionsMCQ") as FormArray;
  }
  addNewOption() {
      const adminForm = this.fb.group({
        question: new FormControl('', [Validators.required]),
        answer: new FormControl(false, [Validators.required]),
      });
      this.questionOptionsMCQ.push(adminForm);
      this.limit++;
  }
  changeSelectionCheckBoxMCQ(event, index) {
    this.selectedIndexMCQ = event.target.checked ? index : undefined;
  }
  changeSelectionCheckBoxTF(event, index) {
    this.selectedIndexTF = event.target.checked ? index : undefined;
  }
  print() {
    // this.addQuestion['questionOptionsMCQ'].push(this.adminForm);
    // this.addQuestion['questionOptionsMCQ'].push(this.adminForm.value);
    // this.admins.push(this.adminForm);
    console.log(this.addQuestion.value);
    // console.log(this.addQuestion.controls['questionOptionsMCQ'].controls['question'])
    // console.log(this.adminForm.value);
  }
}
