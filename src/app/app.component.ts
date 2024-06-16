import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './views/registration-form/registration-form.component';

@NgModule ({
  imports: [
    MatSlideToggleModule,


  ]
})
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RegistrationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'project';

}
