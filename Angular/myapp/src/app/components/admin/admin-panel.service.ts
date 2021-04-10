import { ThisReceiver } from "@angular/compiler";
import { resolve } from "@angular/compiler-cli/src/ngtsc/file_system";
import { Injectable } from "@angular/core";
import { AuthorService } from "src/app/services/authors.service";
import { CategoryService } from "src/app/services/categories.service";

@Injectable()
export class AdminPanelService {
    categories!: any;
    categroiesPromise: Promise<object>
    authors!: any;
    authorsPromise: Promise<any>
    constructor(private categoryService: CategoryService, private authorService: AuthorService) {
        this.categroiesPromise = new Promise<object>((resolve, reject) => {
            this.categoryService.getCategories().toPromise().then(res => {
                this.categories = res.body
                resolve(this.categories);
            })
        })
        this.authorsPromise = new Promise<any>((resolve, reject) => {
            this.authorService.getAuthors("1", 10).toPromise().then(res => {
                this.authors = res.body;
                resolve(this.authors)
            })
        })
    }
    getCategories() {
        return this.categroiesPromise;
    }
    getAuthors() {
        return this.authorsPromise;
    }
}
