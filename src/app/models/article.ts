

export class Article
{
    private title: string = "";
    private content: string = "";
    private comments: Array<any> = [];
    private id: number = 0;

    constructor(title: string, content: string, comments: Array<any>, id: number)
    {
        this.title = title;
        this.comments = comments;
        this.content = content;
        this.id = id;
    }

    getId()
    {
        return this.id;
    }

    getTitle()
    {
        return this.title;
    }

    getContent()
    {
        return this.content;
    }

    getComments()
    {
        return this.comments;
    }

    setTitle(title: string): void
    {
        this.title = title;
    }

    setContent(content: string): void
    {
        this.content = content;
    }

    setComments(comments: Array<any>): void
    {
        this.comments = comments;
    }

    setId(id: number): void
    {
        this.id = id;
    }
}