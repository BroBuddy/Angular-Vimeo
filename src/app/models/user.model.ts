export class User {
    public account: string;
    public bio: string;
    public link: string;
    public location: string;
    public name: string;

    constructor(
        account: string,
        bio: string,
        link: string,
        location: string,
        name: string
    ) {
        this.account = account;
        this.bio = bio;
        this.link = link;
        this.location = location;
        this.name = name;
    }
}
