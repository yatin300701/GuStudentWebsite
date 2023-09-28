import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  displayMobileNavbar: boolean = false;

  showNavbar(show: boolean) {
    this.displayMobileNavbar = show;
  }
  getNavbarStyle() {
    if (window.innerWidth > 800) return;
    if (this.displayMobileNavbar)
      return {
        display: 'block',
      };
    else
      return {
        display: 'none',
      };
  }
}
