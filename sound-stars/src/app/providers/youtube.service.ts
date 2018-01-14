import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {

  private API_KEY  :string = 'AIzaSyDNyj57RdygQf8lLYQi_34QFBL2s0JLOWg';
  private BASE_URL :string = 'https://www.googleapis.com/youtube/v3/';

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private headerOptions = new RequestOptions({ headers: this.headers });

  MAX_RESULTS :number = 21;
  ORDER :string = 'viewCount';
  PART  :string = 'snippet';

  constructor(
    private http: Http
  ) { }

  getSearchUrl(keyword :string) {
    return `${ this.BASE_URL }search?part=${ this.PART }&q=${ keyword }&maxResults=${ this.MAX_RESULTS }&order=${ this.ORDER }&key=${ this.API_KEY }`
  }

  getByIdUrl(id) {
    return `${ this.BASE_URL }videos?part=id%2Csnippet&id=${ id }&key=${ this.API_KEY }`
  }

  getVideosByKeyword(keyword :string = '') {

    if ( !keyword ) {
      console.error('TicketmasterService.getEventsByKeywork()', 'Keyword inválida ou inexistente.');
    }

    return this.http.get( this.getSearchUrl(keyword) , this.headerOptions )
                    .map( response => response.json() );
  }

  getVideoById(id :string = '') {
    return this.http.get( this.getByIdUrl(id) , this.headerOptions )
                    .map( response => response.json() );
  }

}
