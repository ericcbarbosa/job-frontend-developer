import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'artist-social',
  templateUrl: './artist-social.component.html',
  styleUrls: ['./artist-social.component.scss']
})
export class ArtistSocialComponent implements OnInit {

  @Input() externalLinks :any;

  constructor() { }

  ngOnInit() {
  }

}
