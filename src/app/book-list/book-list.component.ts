import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // State variables
  books : Book[];
  
  constructor(
    private data : DataService,
    private router : Router 
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
        // TODO: Should handle error and let user know what happened
      }
    );
  }  // End of the 'getBooks' method

  /**
   * This is the method that will allow the user to update the selected book.
   * It will use the DataService service to send a PUT request to the API 
   * with the book's id number.
   * 
   * @param bookId The Id of the Book object that the user wants to edit.
   */
  updateBook(bookId : number) {    
    // Navigate to the book page and pass the selected book as a parameter    
    this.router.navigate(['book/', bookId]);
  }  // End of the 'updateBook' method

  /**
   * This is the method that will delete the selected book.  It will use the
   * DataService service to send a DELET call to the API with the books's 
   * id number.
   * 
   * @param bookId The id of the Book object that the user wants to delete.
   */
  deleteBook(bookId : number) {
    // Make magic happen
  }  // End of the 'deleteBook' method

}  // End of the 'BookListComponent' class
