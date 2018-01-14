import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketmasterService {

  private API_KEY  :string = 'xxnoIjwuQeRtT9G1Mn0R4ngbGPnjmyzT';
  private BASE_URL :string = 'https://app.ticketmaster.com/discovery/v2/';

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private headerOptions = new RequestOptions({ headers: this.headers });

  constructor (
    private http: Http
  ) { }

  getEventsUrl(key, param) {
    return `${ this.BASE_URL }events.json?${ key }=${ param }&apikey=${ this.API_KEY }`
  }

  getEventsByKeywork(keyword :string = '') {

    if ( !keyword ) {
      console.error('TicketmasterService.getEventsByKeywork()', 'Keyword inválida ou inexistente.');
    }

    return this.http.get( this.getEventsUrl('keyword', keyword) , this.headerOptions )
                    .map( response => response.json() );
  }
}
