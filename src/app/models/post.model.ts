import { Category } from './category.model';

export class Post {
    id: number;
    title: string;
    resume: string;
    content: string;
    author: string;
    category: Category;
    date: number;
 
    $key;

    constructor(title: string, resume: string, content: string, author: string, categoryId: number, categoryName: string, date?: number) {
        this.title = title;
        this.resume = resume;
        this.content = content;
        this.author = author;
        this.category = new Category(categoryId, categoryName);
        this.date = date ? date : new Date().getTime();
    }
}
