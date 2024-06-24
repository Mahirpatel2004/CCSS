import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private _router: Router
  ) {

  }

  navigateToAboutUs = () => {
    this._router.navigate(['aboutus'])
  }

  navigateTo = (pathToRedirect:string) => {
    this._router.navigate([`${pathToRedirect}`]);
  }

  checkForActiveClass=(currentPath:string)=>{
    return this._router.url === currentPath;
  }
}
