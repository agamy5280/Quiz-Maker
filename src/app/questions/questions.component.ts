import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent{
  selectedQuestionOptionFormat: any = '';
  selectedQuestionOptionType: any = '';
  selectedQuestionOptionDifficulty: any = '';
  currentlyChecked: any;
  currentlyChecked2: any;
  currentlyChecked3: any;
  constructor() {}
  courseOptions = [
    { name: "Chemistry", value: 1 },
    { name: "History", value: 2 },
    { name: "Math", value: 3 }
  ];
  questionOptions = [
    { name: "MCQ", value: 1 },
    { name: "True/False", value: 2 },
    { name: "Essay", value: 3 },
    { name: "Case Study", value: 4 }
  ];
  questionType = [
    { name: "A", value: 1 },
    { name: "B", value: 2 },
    { name: "C", value: 3 },
    { name: "D", value: 4 }
  ];
  questionDifficulty = [
    { name: "Easy", value: 1 },
    { name: "Mid", value: 2 },
    { name: "Hard", value: 3 }
  ];
  addQuestion = new FormGroup({
    courseName: new FormControl('', [Validators.required]),
    questionFormat: new FormControl('', [Validators.requiredTrue]),
    questionType: new FormControl('', [Validators.requiredTrue]),
    questionDifficulty: new FormControl('', [Validators.requiredTrue]),
    questionTitle: new FormControl('', [Validators.required]),
    questionAnswer: new FormControl('', [Validators.required]),
  })
  print() {
    console.log(this.addQuestion.controls['courseName'].value)
    console.log(this.selectedQuestionOptionFormat);
    console.log(this.selectedQuestionOptionType);
    console.log(this.selectedQuestionOptionDifficulty);
    console.log(this.addQuestion.controls['questionTitle'].value)
    console.log(this.addQuestion.controls['questionAnswer'].value)
  }
  changeSelectionFormat(event:any, q:any) {
    if(this.currentlyChecked2 === event.target.checked){
      event.target.checked = false;
      return;
    }else {
      this.currentlyChecked2 = event.target.checked;
    }
    if(!event.target.checked) {
      this.selectedQuestionOptionFormat = undefined;
    }
    else {
      q = event.target.value? q: "";
    this.selectedQuestionOptionFormat = q.name;
    }
  }
  changeSelectionType(event:any, q:any) {
    if(this.currentlyChecked === event.target.checked){
      event.target.checked = false;
      return;
    }else {
      this.currentlyChecked = event.target.checked;
    }
    if(!event.target.checked) {
      this.selectedQuestionOptionType = undefined;
    }
    else {
      q = event.target.value? q: "";
    this.selectedQuestionOptionType = q.name;
    }
  }
  changeSelectionDifficulty(event:any, q:any) {
    if(this.currentlyChecked3 === event.target.checked){
      event.target.checked = false;
      return;
    }else {
      this.currentlyChecked3 = event.target.checked;
    }
    if(!event.target.checked) {
      this.selectedQuestionOptionDifficulty = undefined;
    }
    else {
      q = event.target.value? q: "";
    this.selectedQuestionOptionDifficulty = q.name;
    }
  }
}
