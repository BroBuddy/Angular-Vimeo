import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { VimeoService } from './vimeo.service';
import { FilterPipe } from './shared/filter.pipe';
import { SidebarDirective } from './shared/sidebar.directive';
import { DatabaseService } from './database.service';
import { SafePipe } from './shared/safe.pipe';
import { OrderByPipe } from './shared/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    VideosComponent,
    FilterPipe,
    SidebarDirective,
    SafePipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    VimeoService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
