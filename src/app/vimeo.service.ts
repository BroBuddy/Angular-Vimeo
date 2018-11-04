import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { DatabaseService } from './database.service';

import { Video } from './models/video.models';

@Injectable({
  providedIn: 'root'
})
export class VimeoService {
  channel = '';
  apiUrl = '';

  constructor(private http: Http, private databaseSerice: DatabaseService) { }

  getChannels() {
    const headers = new Headers();
    headers.append('Authorization', 'bearer 74ab2d2dc16f2105274923e1553fac90');

    const options = new RequestOptions({ headers: headers });

    this.http.get('https://api.vimeo.com/channels', options)
    .subscribe(
      (response: Response) => {
        console.log(response.json());
        const channels: any[] = response.json();
        this.databaseSerice.setChannels(channels['data']);
      }
    );
  }

  getVideos(channel) {
    if (channel) {
      this.channel = channel;
    }

    this.apiUrl = 'https://api.vimeo.com/channels/' + this.channel + '/videos';

    const headers = new Headers();
    headers.append('Authorization', 'bearer 74ab2d2dc16f2105274923e1553fac90');

    const options = new RequestOptions({ headers: headers });

    this.http.get(this.apiUrl, options)
      .subscribe(
        (response: Response) => {
            const videos: Video[] = response.json();
            for (let i = 0; i < videos['data'].length; i++) {
              delete videos['data'][i]['app'];
              delete videos['data'][i]['categories'];
              delete videos['data'][i]['content_rating'];
              delete videos['data'][i]['language'];
              delete videos['data'][i]['license'];
              delete videos['data'][i]['metadata'];
              delete videos['data'][i]['modified_time'];
              delete videos['data'][i]['privacy'];
              delete videos['data'][i]['resource_key'];
              delete videos['data'][i]['stats'];
              delete videos['data'][i]['status'];
              delete videos['data'][i]['release_time'];
              delete videos['data'][i]['tags'];
              delete videos['data'][i]['transcode'];
              delete videos['data'][i]['upload'];
              delete videos['data'][i]['user']['created_time'];
              delete videos['data'][i]['user']['metadata'];
              delete videos['data'][i]['user']['pictures'];
              delete videos['data'][i]['user']['resource_key'];
              delete videos['data'][i]['user']['uri'];
              delete videos['data'][i]['user']['websites'];
            }
            this.databaseSerice.setData(videos['data']);
            console.log(videos['data']);
        }
    );
  }
}
