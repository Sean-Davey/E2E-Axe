import { browser, logging } from 'protractor';

var AxeBuilder = require('axe-webdriverjs'),
Webdriver = require('selenium-webdriver');
const chromedriver = require('chromedriver');
let chrome = require('selenium-webdriver/chrome');
import { logAxeViolations } from './axe-violation-test';

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());


describe('Some page', function() {
  it('should have no accessibility violations', function(done) {
    var driver = new Webdriver.Builder().forBrowser('chrome').build();
    
    logAxeViolations;

    driver.get('http://localhost:1111')
      .then(function() {
        AxeBuilder(driver)
          .analyze(function(results) {
            expect(results.violations.length).toBe(0);
            if (results.violations.length > 0) {
              logAxeViolations(results.violations);
            }
            done();
        });
    });
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});