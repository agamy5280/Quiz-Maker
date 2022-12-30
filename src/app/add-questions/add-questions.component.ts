import {Component} from '@angular/core';
import { form } from '../interfaces/form';
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent{
  myName: string = '';
  myForm: form[] = [];
  constructor() {}
  name(data: any) {
    this.myForm.push(data)
    console.log(this.myForm);
  }
}
