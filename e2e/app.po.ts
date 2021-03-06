import { browser, element, by } from 'protractor';

export class PortfolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pf-root h1')).getText();
  }
}
