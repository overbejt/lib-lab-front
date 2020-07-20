import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';
import { Book, DataService } from '../service/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // State variables
  id : number;
  book : Book;
  errorMsg : string;

  constructor(
    private route : ActivatedRoute,
    private router : Router, 
    private data : DataService
  ) { }

  ngOnInit(): void {
    // Get the id from the router
    this.id = this.route.snapshot.params['id'];
    // Create filler Book until subcribe is completed
    this.book = new Book(this.id, '', '');
    // Check if not creating a new book
    if (this.id != -1) {
      // When not creating a new book, retrieve it from the API
      this.retrieveBook();
    }
  }  // End of the 'ngOnInit' method

  /**
   * This is the method that will retrieve the book and initialize the state 
   * variable 'book' to it.
   */
  retrieveBook() {
    // Use the data object to retrieve the Book from the API
    this.data.getBookById(this.id).subscribe(
      data => {
        // TMP
        console.log('Book retrieved:');
        console.log(data);
        // Initialize the book object
        this.book = data;
      },
      error => {
        // Log the error if something goes wrong
        console.log(error);
      }
    );
  }  // End of the 'retrieveBook' method

  /**
   * This is the method that will send the book to the PUT endpoint on the 
   * API, and save the book to the database.  When the ID = -1, it will 
   * create a new book.  Otherwise, it will try to update an existing book.
   */
  saveBook() {
    // Save the book
    this.data.saveBook(this.book).subscribe(
      data => {
        // TMP
        console.log('Saving book');
        console.log(this.book);                
      },
      error => {
        console.log('Failed to save the book');
        console.log(error);
        // Set the error message
        this.errorMsg = 'Failed to save the book';
      }
    );
    // Navigate back to the list-book page
    this.navigateToBookListPage();
  }  // End of the 'saveBook' method

  /**
   * This is the method that will navigate back to the Book List page.
   * 
   * // TODO: Add a parameter to let the list-book page know if it was 
   *          successful or not.
   */
  navigateToBookListPage() {
    this.router.navigate(['list-book']);
  }  // End of the 'navigateToBookListPage' method

}  // End of the 'BookComponent' class
