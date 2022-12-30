import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { form } from '../interfaces/form';
@Component({
  selector: 'app-questions-template',
  templateUrl: './questions-template.component.html',
  styleUrls: ['./questions-template.component.scss']
})
export class QuestionsTemplateComponent implements OnInit {
  selectedQuestionOptionFormat: any = '';
  selectedQuestionOptionType: any = '';
  selectedQuestionOptionDifficulty: any = '';
  currentlyChecked: any;
  currentlyChecked2: any;
  currentlyChecked3: any;
  currentPage: string = '';
  questionsFormArr: string[] = [] ;
  myForm: form = {} as form;
  @Output() questionsForm = new EventEmitter<form>();
  constructor(private router: Router) {}
    // Determine which current Route is selected
  ngOnInit() {
    if(this.router.url == "/add") {
      this.currentPage = "add";
    }else if (this.router.url == "/quiz") {
      this.currentPage = "quiz";
      this.addQuestion.get('questionTitle')?.clearValidators();
      this.addQuestion.get('questionAnswer')?.clearValidators();
    }
  }
  courseOptions = [
    { name: "Basics of Political Economy (LE01)", value: 1 },
    { name: "Money and Banking (LE02)", value: 2 },
    { name: "International Economic Relations (LE03)", value: 3 },
    { name: "Public Finance (LE04)", value: 4 },
    { name: "Tax Legislation (LE05)", value: 5 },
    { name: "International Trade Organization Agreements (LX04)", value: 6 }
  ];
  questionOptions = [
    { name: "MCQ", value: 1 },
    { name: "True/False", value: 2 },
    { name: "Essay", value: 3 },
    { name: "Case Study", value: 4 }
  ];
  questionType = [
    { name: "Knowledge & Understanding", value: 1 },
    { name: "Intellectual Skills", value: 2 },
    { name: "Professional & Practical Skills", value: 3 },
    { name: "General & Transferable Skills", value: 4 }
  ];
  questionDifficulty = [
    { name: "Easy", value: 1 },
    { name: "Medium", value: 2 },
    { name: "Hard", value: 3 }
  ];
  // Form validation
  addQuestion = new UntypedFormGroup({
    courseName: new FormControl('', [Validators.required]),
    questionFormat: new FormControl('', [Validators.requiredTrue]),
    questionType: new FormControl('', [Validators.requiredTrue]),
    questionDifficulty: new FormControl('', [Validators.requiredTrue]),
    questionTitle: new FormControl('', Validators.required),
    questionAnswer: new FormControl('', [Validators.required]),
  })
  print() {
    this.myForm.courseName = this.addQuestion.controls['courseName'].value;
    this.myForm.questionFormat = this.selectedQuestionOptionFormat;
    this.myForm.questionType = this.selectedQuestionOptionType;
    this.myForm.questionDifficulty = this.selectedQuestionOptionDifficulty;
    this.myForm.questionTitle = this.addQuestion.controls['questionTitle'].value;
    this.myForm.questionAnswer = this.addQuestion.controls['questionAnswer'].value;
    this.questionsForm.emit(this.myForm);
  }
  // Change selection
  changeSelectionFormat(event:any, q:any) {
    if (this.currentPage == 'add') {
      if(this.currentlyChecked2 === event.target.checked){
        event.target.checked = false;
        return;
      }else {
        this.currentlyChecked2 = event.target.checked;
      }
      if(!event.target.checked) {
        this.selectedQuestionOptionFormat = '';
      }
      else {
        q = event.target.value? q: "";
      this.selectedQuestionOptionFormat = q.name;
      }
    }else {
      return
    }
  }
  changeSelectionType(event:any, q:any) {
    if(this.currentPage == 'add') {
      if(this.currentlyChecked === event.target.checked){
        event.target.checked = false;
        return;
      }else {
        this.currentlyChecked = event.target.checked;
      }
      if(!event.target.checked) {
        this.selectedQuestionOptionType = '';
      }
      else {
        q = event.target.value? q: "";
      this.selectedQuestionOptionType = q.name;
      }
    }else {
      return
    }
    
  }
  changeSelectionDifficulty(event:any, q:any) {
    if (this.currentPage == 'add') {
      if(this.currentlyChecked3 === event.target.checked){
        event.target.checked = false;
        return;
      }else {
        this.currentlyChecked3 = event.target.checked;
      }
      if(!event.target.checked) {
        this.selectedQuestionOptionDifficulty = '';
      }
      else {
        q = event.target.value? q: "";
      this.selectedQuestionOptionDifficulty = q.name;
      }
    }else {
      return
    }
  }
}
