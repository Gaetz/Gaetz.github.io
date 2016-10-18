export class Post {
    id: number;
    title: string;
    resume: string;
    content: string;
    author: string;
    categoryId: number;
    categoryName: string;
    date: number;

    $key; // Exposes firebase key

    constructor(title: string, resume: string, content: string, author: string, categoryId: number, categoryName: string, date?: number) {
        this.title = title;
        this.resume = resume;
        this.content = content;
        this.author = author;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.date = date ? date : new Date().getTime();
    }
}
