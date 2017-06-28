import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'gb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  navbarCollapsed: boolean;
  error: String = null;

  constructor(private router: Router, public afAuth: AngularFireAuth ) {
    this.navbarCollapsed = true;
  }

  ngOnInit() {
  }

  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  backToIndex() {
    this.router.navigate(['/']);
  }

  auth(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch( _ => {
      // Display a message error for a little time
      this.error = 'Erreur de login';
      setTimeout( () => this.error = null, 1000 );
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

}
