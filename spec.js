// spec.js
describe('Protractor Demo App', function() {
  var button = element(by.id('primary-button'));

  it('should have a title', function() {
    browser.get('http://localhost:1111/');

    expect(browser.getTitle()).toEqual('ProtractorTest');
  });

  it('should have inner text', function() {

    expect(button.getText()).toEqual('Test Button');
  });
});