import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-video',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() video :object;

  constructor() { }

  ngOnInit() {
    
  }

}
