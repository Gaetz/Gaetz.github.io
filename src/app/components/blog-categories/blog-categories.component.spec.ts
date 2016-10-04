/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { BlogCategoriesComponent } from './blog-categories.component';
import { BlogService } from '../../services/blog.service';
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

describe('Component: BlogCategories', () => {

  let blogService: BlogService;

  let fireapp: firebase.app.App;
  let rootRef: firebase.database.Reference;
  let angularFire2: AngularFire;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(dbConfig, authConfig)],
      providers: [ BlogService ]
    });
    inject([FirebaseApp, AngularFire, BlogService], (firebaseApp: firebase.app.App, _af: AngularFire, s: BlogService) => {
      angularFire2 = _af;
      fireapp = firebaseApp;
      rootRef = fireapp.database().ref();
      blogService = s;
    })();
  });

  afterEach(done => {
    rootRef.remove();
    fireapp.delete().then(done, done.fail);
  });

  it('should create an instance', () => {
    let component = new BlogCategoriesComponent(blogService);
    expect(component).toBeTruthy();
  });

/*
  it('should display every category name in a list', () => {

    service.listCategories().subscribe(
      // Success
      c => {
        expect(c.length).toBe(3, 'The service should return three categories for the `listCategories()` method');

        expect(c[0].name).toBe('Informatique');
        expect(c[1].name).toBe('Economie');
        expect(c[2].name).toBe('Jeux vidéo');

        const fixture = TestBed.createComponent(BlogCategoriesComponent);
        fixture.detectChanges();

        expect(fixture.componentInstance.categories).not.toBeNull('You need to have a field `categories` initialized with 3 categories');
        expect(fixture.componentInstance.categories.length).toBe(3, 'You need to have a field `categories` initialized with 3 categories');
        expect(fixture.componentInstance.categories[0].name).toBe('Informatique');
        expect(fixture.componentInstance.categories[1].name).toBe('Economie');
        expect(fixture.componentInstance.categories[2].name).toBe('Jeux vidéo');

        const element = fixture.nativeElement;
        const categoryNames = element.querySelectorAll('li');
        expect(categoryNames.length).toBe(3, 'You should have an `li` element per race in your template');
        expect(categoryNames[0].textContent).toContain('Informatique');
        expect(categoryNames[1].textContent).toContain('Economie');
        expect(categoryNames[2].textContent).toContain('Jeux vidéo');

      },
      // Error
      c => console.log('Done testing service')
    );


  });
*/

});
