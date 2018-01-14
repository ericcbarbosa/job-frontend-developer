import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input('video-id') videoId;

  videoUrl :string = `https://www.youtube.com/watch?v=${ this.videoId }`;
  finalUrl :SafeUrl;

  constructor(
    private _sanitizationService: DomSanitizer
  ) { }

  getVideoUrl() {
    return `https://www.youtube.com/embed/${ this.videoId }`;
  }

  getSanitazedVideoUrl() {
    return this._sanitizationService.bypassSecurityTrustResourceUrl( this.getVideoUrl() );
  }

  ngOnInit() {
    this.finalUrl = this.getSanitazedVideoUrl();
  }

}
