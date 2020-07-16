import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../service/data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // State variables
  books : Book[];
  
  constructor(
    private data : DataService 
  ) { }

  ngOnInit(): void {
    // Get the books
    this.getBooks();
  }

  /**
   * This is the method that will tell the data service to get the books from 
   * the API.  Then it will initialize the 'books' array to the array of 
   * books returned from the API.
   */
  getBooks() {
    console.log('Attempting to get books');
    // Get the books from the backend
    this.data.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data;
      },
      error => {
        console.log(error);
        // Should handle error and let user know what happened
      }
    );
  }  // End of the 'getBooks' method

}  // End of the 'BookListComponent' class
