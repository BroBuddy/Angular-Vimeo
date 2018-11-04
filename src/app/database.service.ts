import { Injectable } from '@angular/core';
import { Video } from './models/video.models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private data = [];
  private channels = [];

  constructor() { }

  setData(data: Video[]) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  getSize() {
    return this.data.length;
  }

  setChannels(channels: any[]) {
    this.channels = channels;
  }

  getChannels() {
    return this.channels;
  }

  resetData() {
    this.data = [];
  }
}
