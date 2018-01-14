import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.scss']
})
export class ArtistHeaderComponent implements OnInit {

  @Input() name :string;
  @Input() thumb :string;

  constructor() { }

  ngOnInit() {
  }

}
