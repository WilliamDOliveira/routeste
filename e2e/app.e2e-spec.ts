import { RoutestePage } from './app.po';

describe('routeste App', () => {
  let page: RoutestePage;

  beforeEach(() => {
    page = new RoutestePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
