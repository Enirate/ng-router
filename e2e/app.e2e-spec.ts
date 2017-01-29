import { RouterAngularPage } from './app.po';

describe('router-angular App', function() {
  let page: RouterAngularPage;

  beforeEach(() => {
    page = new RouterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
