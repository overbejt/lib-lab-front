import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Observable } from 'rxjs';

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

  /**
   * This is a method that will retirieve a specific book from the API.  It 
   * will retrieve the book based on its ID.
   * 
   * @param id The id of the book that is needed from the API.
   */
  getBookById(id : number) {
    // Define the URL
    let url = `${API_URL}/books/${id}`;
    // Send back the observable
    return this.http.get<Book>(url);
  }  // End of the 'getBookById' method

  /**
   * This is the method that will send a book object to the PUT endpoint on 
   * the API.  It will update the supplied book.  If the book has an 
   * ID = -1, it will create a new book.  This method returns an observable.
   * 
   * @param book The book object to save.
   */
  saveBook(book : Book) {
    // Define URL
    let url = `${API_URL}/books`;
    // Define headers
    let headerString = { 'Content-Type' : 'application/json' };
    // Send back the observable
    return this.http.put(
      url,                        // Set the URL
      { body : book },            // Set the body
      { headers : headerString }  // Set the header
    );    
  }  // End of the 'saveBook' method

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
