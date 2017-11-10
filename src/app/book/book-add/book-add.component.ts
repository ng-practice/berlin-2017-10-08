import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BookDataService } from '../core/book-data.service';

@Component({
  selector: 'book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
})
export class BookAddComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookData: BookDataService) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      abstract: ['', Validators.required],
      author: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  createBook() {
    this.bookData.create(this.bookForm.value).subscribe();
  }
}
