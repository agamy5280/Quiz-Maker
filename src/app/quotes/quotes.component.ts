import { Component, OnInit } from '@angular/core';
import { QoutesService } from '../services/qoutes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  temp: any;
  quote: string = "";
  author: string = "";
  constructor(private qouteService: QoutesService) {}
  ngOnInit(): void {
    this.qouteService.getQoute().subscribe((data: any)=>{
      this.temp = data;
      this.quote = data.quote;
      this.author = data.author;
      console.log(this.temp);
      console.log(this.quote);
      console.log(this.author);
    })
  }
}
