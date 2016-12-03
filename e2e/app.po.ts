import { browser, element, by } from 'protractor';

export class VillowPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vil-root h1')).getText();
  }
}
