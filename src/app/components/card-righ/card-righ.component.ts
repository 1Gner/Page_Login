import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-righ',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './card-righ.component.html',
  styleUrl: './card-righ.component.scss'
})
export class CardRighComponent {
  meuForm: FormGroup;

  constructor() {
    this.meuForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }


  onSubmit() {
    console.log(this.meuForm.value);
  }


}