import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {
  myClass = 'bg-blue-500';
  isActive: boolean = false;
  marks = 50;

  backColor = '';

  myCss = {
    color: 'white',
    'background-color': 'blue',
  };

  ToggleActivation() {
    this.isActive = !this.isActive;
  }
}
