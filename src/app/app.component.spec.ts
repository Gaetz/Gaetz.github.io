/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogService } from './services/blog.service';

describe('App: Gblog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MenuComponent, BlogCategoriesComponent
      ],
      providers: [ BlogService ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Gaëtan Blaise-Cazalet'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Gaëtan Blaise-Cazalet');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Gaëtan Blaise-Cazalet');
  }));
});
