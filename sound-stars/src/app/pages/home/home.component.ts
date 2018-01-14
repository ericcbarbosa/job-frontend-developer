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
  title :string = 'Sound Stars';
  subtitle :string = 'Uma aplicação feita para os apaixonados por música. Busque pelos seus vídeos favoritos e aprenda mais sobre seus ídolos em um único lugar!';
  loading :boolean = false;

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
    this.getYoutubeResult('Linkin Park');
  }

  getTicketResults(keyword) {
    this.loading = true;

    return this._serviceTicketMaster.getEventsByKeywork( keyword )
                        .subscribe(
                          (response) => {
                            this.page = response.page;
                            this.events = response._embedded.events;
                          },
                          (error) => console.log(error),
                          () => {
                            this.loading = false;
                            console.log('Pages: ', this.page);
                            console.log('Events: ', this.events);
                          }
                        );
  }

  getYoutubeResult(keyword) {
    this.loading = true;

    return this._serviceYoutube.getVideosByKeyword( keyword )
                              .subscribe(
                                (response) => {
                                  this.videos = response.items.map( item => {
                                    item.snippet.id = item.id.videoId;
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
