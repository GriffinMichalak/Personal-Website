class Project {
    public title: string;
    public image: string; 
    public link: string; 

    public constructor(title: string, image: string, link: string) {
        this.title = title;
        this.image = image;
        this.link = link; 
    }
}

export { Project }