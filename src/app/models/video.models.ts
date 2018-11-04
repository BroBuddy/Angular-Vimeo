import { User } from './user.model';

export class Video {
    public created_time: string;
    public description: string;
    public duration: number;
    public embed: any;
    public height: number;
    public link: string;
    public name: string;
    public pictures: any;
    public uri: string;
    public user: User;
    public width: number;

    constructor(
        created_time: string,
        description: string,
        duration: number,
        embed: string,
        height: number,
        link: string,
        name: string,
        pictures: any,
        uri: string,
        user: any,
        width: number
    ) {
        this.created_time = created_time;
        this.description = description;
        this.duration = duration;
        this.embed = embed;
        this.height = height;
        this.link = link;
        this.name = name;
        this.pictures = pictures;
        this.uri = uri;
        this.user = user;
        this.width = width;
    }
}
