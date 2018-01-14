import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent implements OnInit {

  @Input() video;

  constructor() { }

  ngOnInit() {
    
  }

}
