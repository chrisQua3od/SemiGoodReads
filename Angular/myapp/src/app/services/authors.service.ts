import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../components/models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private client: HttpClient) {
    console.log('service ctor');
  }
  readonly baseURL: string = 'http://localhost:8000/authors';

  getAuthors(page: string, limit: number) {
    return this.client.get(this.baseURL + `?page=${page}&limit=${limit}`, { observe: 'response' });
  }

  getAuthorById(id: number) {
    return this.client.get(`${this.baseURL}/${id}`);
  }

  deleteAuthor(id: number) {
    return this.client.delete(`${this.baseURL}/${id}`);
  }

  addAuthor(author: Author) {
    return this.client.post(this.baseURL, author);
  }
  updateAuthor(id: string, author: any) {
    return this.client.patch(`${this.baseURL}/${id}`, author);
  }
}
