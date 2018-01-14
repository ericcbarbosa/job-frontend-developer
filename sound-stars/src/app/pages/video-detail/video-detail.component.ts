import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { YoutubeService } from '../../providers/youtube.service';
import { TicketmasterService } from '../../providers/ticketmaster.service';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {

  query :string  = '';
  videoId :string  = '';

  loading :boolean = false;

  pageTitle :string = 'Sound Stars';
  subtitle :string = '';

  // Youtube
  video :object;

  // TicketMaster
  page :object;
  attractions :Array<object>;
  artist :object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _serviceYoutube: YoutubeService,
    private _serviceTicketMaster: TicketmasterService
  ) { }

  ngOnInit() {
    this.getYoutubeResult( this.getVideoId() );
    this.getTicketResults( this.getVideoQuery() );
  }

  // Get Params
  getVideoId() :string {
      this.route.params.subscribe(params => {
          this.videoId = params['id'];
        });
      return this.videoId;
  }

  getVideoQuery() :string {
      this.route.params.subscribe(params => {
          this.query = params['query'];
        });
      return this.query;
  }

  // Services
  getYoutubeResult( id ) {
    this.loading = true;

    let request = this._serviceYoutube.getVideoById( id );

    return request.subscribe(
                    (response) => {
                      this.video = response.items[0].snippet;
                      this.video["id"] = response.items[0].id;
                    },
                    (error) => console.error(error),
                    () => {
                      this.loading = false;
                      // console.log('-> VIDEO: ', this.video);
                    }
                  );
  }

  getTicketResults( query ) {
    this.loading = true;

    let request = this._serviceTicketMaster.getAttractionByKeywork( query );

    return request.subscribe(
                  (response) => {
                    this.page        = response.page ? response.page : null;
                    this.attractions = response._embedded ? response._embedded.attractions : null;

                    if ( this.attractions ) {
                      this.attractions.map( attraction => {
  
                        if ( attraction["name"].toLowerCase().trim() == query ) {
                          this.artist = attraction;
                        }
  
                      });
                    }
                  },

                  (error) => console.log(error),

                  () => {
                    this.loading = false;
                    // console.log('-> ARTIST: ', this.artist);
                  }
                );
  }



}
