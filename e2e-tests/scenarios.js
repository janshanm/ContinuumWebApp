'use strict';

describe('continuum assessment platform', function() {


  it('should automatically redirect to /strategy when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/strategy");
  });


  describe('strategy', function() {

    beforeEach(function() {
      browser.get('index.html#!/strategy');
    });


    it('should render strategy when user navigates to /strategy', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for Strategy and Alignment/);
    });

  });


  describe('planning', function() {

    beforeEach(function() {
      browser.get('index.html#!/planning');
    });


    it('should render planning when user navigates to /planning', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for Planning and Requirements/);
    });

  });
});
