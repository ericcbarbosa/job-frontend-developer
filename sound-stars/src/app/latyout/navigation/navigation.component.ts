import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() title = '';
  @Input() subtitle = '';

  constructor() { }

  ngOnInit() {
  }

}
