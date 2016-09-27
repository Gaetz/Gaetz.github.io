/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogService } from './blog.service';

describe('Service: Blog', () => {

  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService]
    });
  });

  beforeEach(inject([BlogService], (s: BlogService) => service = s));

  it('should ...', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));

  it('should list categories', () => {
    service.listCategories().subscribe(
      // Success
      c => {
        expect(c.length).toBe(3, 'The service should return three categories for the `listCategories()` method');
      },
      // Error
      c => console.log("Done testing service")
    );
  });

});
