import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../service/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // State variables
  books : Book[];
  errorMsg : string;
  successMsg : string;
  
  constructor(
    private data : DataService,
    private route : ActivatedRoute,
    private router : Router 
  ) { }

  ngOnInit(): void {
    // Get the books
    this.getBooks();
    // Check if there is a PUT error
    this.checkPathParams();
  }

  /**
   * This is the method that will check if there is a parameter in the URL.  
   * When there is, it will handle it and invoke the proper method to 
   * initialize the message variable.
   */
  checkPathParams() : void {
    // Get the id from the router
    let hasError = this.route.snapshot.params['putError'];
    // Check if the PUT request was successful
    if (hasError === 'true') {
      this.errorMsg = 'Failed to save the book!';

      // Check if the PUT request failed
    } else if (hasError === 'false') {
      this.successMsg = 'The book was saved successfuly!';
    }
    // Otherwise, do nothing
  }  // End of the 'checkPathParams' method

  /**
   * This is the method that will tell the data service to get the books from 
   * the API.  Then it will initialize the 'books' array to the array of 
   * books returned from the API.
   */
  getBooks() : void {
    console.log('Attempting to get books');
    // Get the books from the backend
    this.data.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data;
      },
      error => {
        console.log(error);
        this.errorMsg = 'Failed to contact the API!';
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
  updateBook(bookId : number) : void {    
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
  deleteBook(bookId : number) : void {
    // Make magic happen
  }  // End of the 'deleteBook' method

}  // End of the 'BookListComponent' class
