import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { provideHttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-card-righ',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  
  templateUrl: './card-righ.component.html',
  styleUrl: './card-righ.component.scss'
})
export class CardRighComponent {
  meuForm: FormGroup;
  message: string = '';

  constructor(private authService: AuthService) {

    this.meuForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }



  onLogin() {

    const username = this.meuForm.get('username')?.value;
    const password = this.meuForm.get('password')?.value;
  
    if (this.meuForm.valid) {
      this.authService.login(username, password)
        .pipe(
          tap(response => {
           
            this.message = 'Login bem-sucedido!';
            console.log(response);
          })
        )
        .subscribe({
          next: () => {},
          error: (error) => {
            this.message = 'Erro ao fazer login. Verifique suas credenciais.';
            console.error(error);
          }
        });
    } else {
      this.message = 'Por favor, preencha o username e a senha corretamente.';
    }
  }
  

}