import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../components/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private client: HttpClient) {}
  readonly baseURL: string = 'http://localhost:8000/categories';

  getCategories() {
    return this.client.get(this.baseURL, { observe: 'response' });
  }

  getCategoryById(id: number) {
    return this.client.get(`${this.baseURL}/${id}`);
  }

  deleteCategory(id: number) {
    return this.client.delete(`${this.baseURL}/${id}`);
  }

  addCategory(category: Category) {
    return this.client.post(this.baseURL, category);
  }
  editCategory(id: number, category: Category) {
    return this.client.patch(`${this.baseURL}/${id}`, category);
  }
}
