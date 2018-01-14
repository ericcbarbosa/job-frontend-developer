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
import { BandComponent } from './components/band/band.component';
import { SharedComponentsComponent } from './shared/shared-components/shared-components.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    VideoDetailComponent,
    CardComponent,
    SearchComponent,
    VideoComponent,
    BandComponent,
    SharedComponentsComponent,
    SharedProvidersComponent,
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
