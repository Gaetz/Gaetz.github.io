import { browser, by, element } from 'protractor';

export class Gaetz.Github.IoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gb-root h1')).getText();
  }
}
