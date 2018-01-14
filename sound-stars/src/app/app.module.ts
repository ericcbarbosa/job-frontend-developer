import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Providers
import { TicketmasterService } from './providers/ticketmaster.service';
import { YoutubeService } from './providers/youtube.service';
import { SharedProvidersComponent } from './shared/shared-providers/shared-providers.component';

// Layout
import { FooterComponent } from './latyout/footer/footer.component';
import { NavigationComponent } from './latyout/navigation/navigation.component';

// Components
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { VideoComponent } from './components/video/video.component';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';
import { VideoPlayerComponent } from './components/video/video-player/video-player.component';
import { SharedComponentsComponent } from './shared/shared-components/shared-components.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { VideoInfoComponent } from './components/video/video-info/video-info.component';
import { FeedbackMessagesComponent } from './components/feedback-messages/feedback-messages.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { ArtistClassificationComponent } from './components/artist-info/artist-classification/artist-classification.component';
import { ArtistSocialComponent } from './components/artist-info/artist-social/artist-social.component';
import { ArtistMediaComponent } from './components/artist-info/artist-media/artist-media.component';
import { ArtistHeaderComponent } from './components/artist-info/artist-header/artist-header.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    CardComponent,
    SearchComponent,
    VideoComponent,
    VideoDetailComponent,
    VideoPlayerComponent,
    VideoInfoComponent,
    SharedComponentsComponent,
    SharedProvidersComponent,
    FeedbackMessagesComponent,
    ArtistInfoComponent,
    ArtistClassificationComponent,
    ArtistSocialComponent,
    ArtistMediaComponent,
    ArtistHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    TicketmasterService,
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
