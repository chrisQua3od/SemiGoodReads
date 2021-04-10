import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) { }
  readonly baseUrl: string = 'http://localhost:8000/books';

  getBooks(page: number, limit: number) {
    return this.httpClient.get(this.baseUrl + `?page=${page}&limit=${limit}`);
  }
  addBook(bookBody: object) {
    return this.httpClient.post(this.baseUrl, bookBody);
  }
  deleteBook(id: string) {
    console.log(id);
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  updateBook(id: string, bookBody: any) {
    console.log(bookBody.value);
    return this.httpClient.patch(`${this.baseUrl}/${id}`, bookBody);
  }
}
