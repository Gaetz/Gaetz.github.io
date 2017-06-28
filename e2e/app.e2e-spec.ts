import { Gaetz.Github.IoPage } from './app.po';

describe('gaetz.github.io App', () => {
  let page: Gaetz.Github.IoPage;

  beforeEach(() => {
    page = new Gaetz.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
