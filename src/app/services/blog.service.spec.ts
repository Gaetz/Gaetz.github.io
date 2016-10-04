/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogService } from './blog.service';
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
import { dbConfig, authConfig } from '../../test.firebase';

describe('Service: Blog', () => {

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

  it('should ...', inject([BlogService], (serviceInject: BlogService) => {
    expect(serviceInject).toBeTruthy();
  }));

/*
  it('should list categories', () => {
    service.listCategories().subscribe(
      // Success
      c => {
        expect(c.length).toBe(3, 'The service should return three categories for the `listCategories()` method');
      },
      // Error
      c => console.log('Done testing service')
    );
  });
  */

});
