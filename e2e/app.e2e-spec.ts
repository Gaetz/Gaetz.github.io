import { GblogPage } from './app.po';

describe('gblog App', function() {
  let page: GblogPage;

  beforeEach(() => {
    page = new GblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Gaëtan Blaise-Cazalet');
  });
});
