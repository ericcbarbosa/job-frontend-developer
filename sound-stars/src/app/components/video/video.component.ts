import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-wrapper',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input('video-id') videoId :string = '';
  @Input('video-detail') videoDetail :any;

  constructor() {
    
  }

  ngOnInit() {
    
  }

}
