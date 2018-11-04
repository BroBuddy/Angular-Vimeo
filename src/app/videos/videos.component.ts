import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Video } from '../models/video.models';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];
  display = 'none';
  modalTitle = '';
  modalBody = '';
  filteredTitle = '';

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.videos = this.databaseService.getData();
  }

  openModal(video: Video) {
    this.modalTitle = video.name;
    this.modalBody = video.embed.html;
    this.display = 'block';
  }

  onCloseHandled() {
    this.modalTitle = '';
    this.modalBody = '';
    this.display = 'none';
  }

}
