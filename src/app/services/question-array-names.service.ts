import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionArrayNamesService {

  constructor() { }
  
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
}
