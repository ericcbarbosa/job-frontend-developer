import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'artist-classification',
  templateUrl: './artist-classification.component.html',
  styleUrls: ['./artist-classification.component.scss']
})
export class ArtistClassificationComponent implements OnInit {

  @Input() classifications :object;

  constructor() { }

  ngOnInit() {
  }

}
