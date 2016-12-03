import { VillowPage } from './app.po';

describe('villow App', function() {
  let page: VillowPage;

  beforeEach(() => {
    page = new VillowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vil works!');
  });
});
