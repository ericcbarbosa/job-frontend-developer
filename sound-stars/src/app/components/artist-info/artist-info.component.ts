import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {

  @Input() artist :any;

  constructor() { }

  ngOnInit() {
  }

}
