import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VimeoService } from '../vimeo.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  channels: any[];
  channel = 'bestofthemonth';

  constructor(private vimeoService: VimeoService, private databaseService: DatabaseService) { }

  ngOnInit() {
    setTimeout(() => {
      this.channels = this.databaseService.getChannels();
    }, 2000);
  }

  setChannel(channel: string) {
    this.channel = channel;
  }

  onSubmit(form: NgForm) {
    const channel = form.value.channel;

    this.databaseService.resetData();

    console.log(channel);

    this.vimeoService.getVideos(channel);
  }

}
