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
        // Should handle error and let user know what happened
      }
    );
  }  // End of the 'getBooks' method

  /**
   * This is the method that will redirect the user to the Book page so that 
   * they can add/update a book.
   */
  navigateToBook(book : Book) {
    // TODO: This method keeps making the error page pop up.  Need to take a 
    //       fresh look at it later.
    // Declaring 
    // Check if book is undefined, AKA creating a new book
    if (book === undefined) {
      // When it is, initialize it to a book with no state variables initialized
      book = new Book(undefined, undefined, undefined);
    }
    console.log('Editing: ');
    console.log(book);
    // Navigate to the book page, passing this book object as a parameter
    this.router.navigate(['book/', id]);
  }  // End of the 'navigateToBook' method

  /**
   * This is the method that will allow the user to update the selected book.
   * It will use the DataService service to send a PUT request to the API 
   * with the book's id number.
   * 
   * @param bookId The Id of the Book object that the user wants to edit.
   */
  updateBook(bookId : number) {    
    // // Find the book the user selected
    // let toEdit = this.books.find(b => b.id === bookId);
    // console.log('Editing: ');
    // console.log(toEdit);
    
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
