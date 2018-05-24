import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isopen = false;
  toggleMenu() {
    console.log('clicked');
    document.getElementById('mySidenav').style.width = '250px';
    if (!this.isopen) {
      document.getElementById('mySidenav').style.width = '250px';
    } else {
    document.getElementById('mySidenav').style.width = '0px';
    }
   this.isopen = !this.isopen;
  }

  closeNav() {
    console.log('called');
    document.getElementById('mySidenav').style.width = '0px';
    this.isopen = !this.isopen;
  }
}
