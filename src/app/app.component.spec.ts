/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReflectiveInjector, Provider } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogCategoriesComponent } from './components/blog-categories/blog-categories.component';
import { BlogService } from './services/blog.service';
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
import { dbConfig, authConfig } from '../test.firebase';

describe('App: Gblog', () => {

  let fireapp: firebase.app.App;
  let rootRef: firebase.database.Reference;
  let angularFire2: AngularFire;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(dbConfig, authConfig)],
      declarations: [
        AppComponent, MenuComponent, BlogCategoriesComponent
      ],
      providers: [ BlogService ]
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

  it('should create the app', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Gaëtan Blaise-Cazalet'`, () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Gaëtan Blaise-Cazalet');
  });

  it('should render title in a h1 tag', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Gaëtan Blaise-Cazalet');
  });
});
