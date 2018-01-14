import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feedback-messages',
  templateUrl: './feedback-messages.component.html',
  styleUrls: ['./feedback-messages.component.scss']
})
export class FeedbackMessagesComponent implements OnInit {

  @Input() messages: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
