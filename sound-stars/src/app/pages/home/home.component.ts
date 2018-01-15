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

  // Tratamentos
  loading :boolean = false;
  messages :Array<string> = [];
  noDescription :string = 'Ops, não temos descrição para este item';

  // TicketMaster
  page :any;
  events :Array<object>;

  // Youtube
  videos :Array<object>;

  constructor(
    private _serviceTicketMaster: TicketmasterService,
    private _serviceYoutube: YoutubeService
  ) { }

  ngOnInit() {
    // this.getYoutubeResult('U2');
  }

  pressKeyHandler(event, query) {
    if ( event.keyCode == 13 || event.key.toLowerCase() === 'enter' ) {
      this.search( query, null );
    }
  }

  search( query, target ) {
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

  scrollToResult( target ) {
    let offset = target.offsetTop * 0.9;

    for( let i = 0; i < offset; i++ ) {
      setTimeout( () => window.scrollTo(0, i), 50 * 1);
    }
  }

  getYoutubeResult( keyword ) {
    this.loading = true;

    let request = this._serviceYoutube.getVideosByKeyword( keyword );

    return request.subscribe(
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

        let target = document.getElementById('results');
        this.scrollToResult( target );
      }
    );
  }

}
