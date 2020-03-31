import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          isbn: [''],
          title: [''],
          author: [''],
          price: ['']
      });
  }

  onSubmit() {
    this.submitted = true;
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
}
}


