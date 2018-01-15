import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() triggerSearch = new EventEmitter<string>();
  @Input() loading :boolean;

  constructor() { }

  ngOnInit() { }

  pressKeyHandler(event, query) {
    if ( event.keyCode == 13 || event.key.toLowerCase() === 'enter' ) {
      this.triggerSearch.emit( query );
    }
  }

  clickHandler(query) {
    this.triggerSearch.emit( query );
  }

}
