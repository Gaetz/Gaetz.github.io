import { browser, element, by } from 'protractor/globals';

export class GblogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gb-root h1')).getText();
  }
}
