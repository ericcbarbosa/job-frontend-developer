import { Component, OnInit } from '@angular/core';
import { TicketmasterService } from '../../providers/ticketmaster.service';
import { Observable } from 'rxjs/Rx';

// Providers
import { YoutubeService } from '../../providers/youtube.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    YoutubeService
  ]
})

export class HomeComponent implements OnInit {
  loading :boolean = false;

  messages :Array<string> = [];

  // TicketMaster
  page :object;
  events :Array<object>;

  // Youtube
  videos :Array<object>;

  noDescription :string = 'Ops, não temos descrição para este item'; 

  constructor(
    private _serviceTicketMaster: TicketmasterService,
    private _serviceYoutube: YoutubeService
  ) { }

  ngOnInit() {
    this.getYoutubeResult('The XX');
  }

  pressKeyHandler(event, query) {
    if ( event.keyCode == 13 || event.key.toLowerCase() === 'enter' ) {
      this.search( query );
    }
  }

  search( query ) {
    query = query.trim().toLowerCase();
  
    if ( query === '' ) {
      this.messages.push('Digite o nome de um artista ou banda para buscar');
    }

    if ( query ) {
      this.clearMessages();
      this.getYoutubeResult( query );
    }
  }

  clearMessages() {
    this.messages = [];
  }

  getYoutubeResult(keyword) {
    this.loading = true;

    return this._serviceYoutube.getVideosByKeyword( keyword )
                              .subscribe(
                                (response) => {
                                  this.videos = response.items.map( item => {
                                    item.snippet.id = item.id.videoId;
                                    item.snippet.query = keyword;

                                    return item.snippet;
                                  });
                                },
                                (error) => console.error(error),
                                () => {
                                  this.loading = false;
                                }
                              );
  }

}
