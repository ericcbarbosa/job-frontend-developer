import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'artist-media',
  templateUrl: './artist-media.component.html',
  styleUrls: ['./artist-media.component.scss']
})
export class ArtistMediaComponent implements OnInit {

  @Input() images :Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
