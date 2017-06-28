/* tslint:disable:no-unused-variable */
/*
import { TestBed, async, inject } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { MenuComponent } from './menu.component';
import {
  AngularFire,
  FirebaseObjectObservable,
  FIREBASE_PROVIDERS,
  AngularFireAuth,
  FirebaseConfig,
  FirebaseApp,
  defaultFirebase,
  AngularFireDatabase,
  FirebaseAppConfig,
  AngularFireModule
} from 'angularfire2';
import * as firebase from 'firebase';
import { dbConfig, authConfig } from '../../../test.firebase';

describe('Component: Menu', () => {

  let fireapp: firebase.app.App;
  let rootRef: firebase.database.Reference;
  let angularFire2: AngularFire;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, AngularFireModule.initializeApp(dbConfig, authConfig)],
    });

    inject([FirebaseApp, AngularFire], (firebaseApp: firebase.app.App, _af: AngularFire) => {
      angularFire2 = _af;
      fireapp = firebaseApp;
      rootRef = fireapp.database().ref();
    })();
  });

  afterEach(done => {
    rootRef.remove();
    fireapp.delete().then(done, done.fail);
  });

  it('should create an instance', () => {
    let component = new MenuComponent();
    expect(component).toBeTruthy();
  });

  it('should have a `navbarCollapsed` field', () => {
    const menu: MenuComponent = new MenuComponent();
    menu.ngOnInit();
    expect(menu.navbarCollapsed)
      .toBe(true, 'Check that `navbarCollapsed` is initialized with `true`.' +
        'Maybe you forgot to declare `navbarCollapsed` in your component.');
  });

  it('should have a `toggleNavbar` method', () => {
    const menu: MenuComponent = new MenuComponent();
    expect(menu.toggleNavbar)
      .not.toBeNull('Maybe you forgot to declare a `toggleNavbar()` method');

    menu.toggleNavbar();

    expect(menu.navbarCollapsed)
      .toBe(false, '`toggleNavbar()` should change `navbarCollapsed` from true to false`');

    menu.toggleNavbar();

    expect(menu.navbarCollapsed)
      .toBe(true, '`toggleNavbar()` should change `navbarCollapsed` from false to true`');
  });

  it('should toggle the class on click', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const element = fixture.nativeElement;

    fixture.detectChanges();

    const navbarCollapsed = element.querySelector('#navbar');
    expect(navbarCollapsed).not.toBeNull('No element with the id `#navbar`');
    expect(navbarCollapsed.classList).toContain('collapse', 'The element with the id `#navbar` should have the class `collapse`');

    const button = element.querySelector('button');
    expect(button).not.toBeNull('No `button` element to collapse the menu');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const navbar = element.querySelector('#navbar');
    expect(navbar.classList).not
      .toContain('collapse', 'The element with the id `#navbar` should have not the class `collapse` after a click');
  });

});
*/
