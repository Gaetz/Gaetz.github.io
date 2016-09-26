/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { AppModule } from '../app.module';
import { BlogCategoriesComponent } from './blog-categories.component';
import { BlogService } from '../services/blog.service';


describe('Component: BlogCategories', () => {

  const service = jasmine.createSpyObj('BlogService', ['listCategories']);

  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule],
    providers: [{ provide: BlogService, useValue: service }]
  }));

  it('should create an instance', () => {
    let component = new BlogCategoriesComponent(service);
    expect(component).toBeTruthy();
  });


  it('should display every category name in a list', () => {
    service.listCategories.and.returnValue([{ name: 'Informatique' }, { name: 'Economie' }, { name: 'Jeux vidéo' }]);

    const fixture = TestBed.createComponent(BlogCategoriesComponent);
    fixture.detectChanges();

    expect(service.listCategories).toHaveBeenCalled();

    expect(fixture.componentInstance.categories).not.toBeNull('You need to have a field `categories` initialized with 3 categories');
    expect(fixture.componentInstance.categories.length).toBe(3, 'You need to have a field `categories` initialized with 3 categories');
    expect(fixture.componentInstance.categories[0].name).toBe('Informatique');
    expect(fixture.componentInstance.categories[1].name).toBe('Economie');
    expect(fixture.componentInstance.categories[2].name).toBe('Jeux vidéo');

    const element = fixture.nativeElement;
    const raceNames = element.querySelectorAll('li');
    expect(raceNames.length).toBe(3, 'You should have an `li` element per race in your template');
    expect(raceNames[0].textContent).toContain('Informatique');
    expect(raceNames[1].textContent).toContain('Economie');
    expect(raceNames[2].textContent).toContain('Jeux vidéo');
  });


});
