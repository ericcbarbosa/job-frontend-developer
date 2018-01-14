import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { YoutubeService } from '../../providers/youtube.service';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {

  videoId :string  = '';
  loading :boolean = false;
  video :object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: YoutubeService
  ) { }

  ngOnInit() {
    this.getYoutubeResult( this.getVideoId() );
  }

  getVideoId() :string {
      this.route.params.subscribe(params => {
          this.videoId = params['id']
        });
      return this.videoId;
  }

  getYoutubeResult(id) {
    this.loading = true;

    return this._service.getVideoById( id )
                              .subscribe(
                                (response) => {
                                  this.video = response.items[0].snippet;
                                  this.video["id"] = response.items[0].id;
                                },
                                (error) => console.error(error),
                                () => {
                                  console.log('video data: ', this.video);
                                  this.loading = false;
                                }
                              );
  }

}
