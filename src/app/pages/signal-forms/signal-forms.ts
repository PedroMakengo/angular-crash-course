import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField, JsonPipe],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  empModel = signal({
    name: '',
    email: '',
  });

  // empForm = form(this.empModel);
  empForm = form(this.empModel, (schema) => {
    (required(schema.name, { message: 'Name is required' }),
      required(schema.email, { message: 'E-mail is required' }),
      email(schema.email, { message: 'E-mail is not valid' }));
  });
}
