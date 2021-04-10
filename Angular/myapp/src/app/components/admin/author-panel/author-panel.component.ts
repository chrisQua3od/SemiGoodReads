import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/authors.service';
import { AdminPanelService } from '../admin-panel.service';

@Component({
  selector: 'app-author-panel',
  templateUrl: './author-panel.component.html',
  styleUrls: ['./author-panel.component.css'],
})
export class AuthorPanelComponent implements OnInit {
  authors: any;
  editAuthor: any;
  constructor(private authorService: AuthorService, private adminPanelService: AdminPanelService) { }

  ngOnInit(): void {
    this.adminPanelService.getAuthors().then((res: any) => {
      this.authors = res.authors;
    })
  }
  delteAuthor(author: any) {
    this.authorService.deleteAuthor(author._id).subscribe((res) => {
      console.log(res);
    });
  }
  updatedAuthor(author: any) {
    this.editAuthor = author;
  }
}
