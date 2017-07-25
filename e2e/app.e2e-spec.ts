import { TedushopAdmin2Page } from './app.po';

describe('tedushop-admin2 App', () => {
  let page: TedushopAdmin2Page;

  beforeEach(() => {
    page = new TedushopAdmin2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
