import { TechWorldPage } from './app.po';

describe('tech-world App', function() {
  let page: TechWorldPage;

  beforeEach(() => {
    page = new TechWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
