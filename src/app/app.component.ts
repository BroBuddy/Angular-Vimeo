import { Component, OnInit } from '@angular/core';
import { VimeoService } from './vimeo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private vimeoService: VimeoService) {}

  ngOnInit() {
    this.vimeoService.getChannels();
  }
}
