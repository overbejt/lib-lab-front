import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http : HttpClient
  ) { }

  /**
   * This is the method that will get the books from the API.
   */
  getBooks() {
    // Define the URL
    let url = `${API_URL}/books`;
    // Send back the observable
    return this.http.get<Book[]>(url);
  }  // End of the 'getBooks' method

}  // End of the 'DataService' class

/**
 * This is the class that will define the book object.
 */
export class Book {
  constructor (
    public id : number,
    public title : string,
    public isbn : string
  ) { }
}  // End of the 'Book' class
