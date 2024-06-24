import { Component } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private _router: Router
  ) {

  }

}
