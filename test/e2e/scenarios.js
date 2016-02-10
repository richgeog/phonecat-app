'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  describe('phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should filter the phone lit as per as a user types into the search box', function() {
      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });

    it('should be possible to control phone order via the drop down select box', function() {

      var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      var query = element(by.model('query'));

      function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

    query.sendKeys('tablet');

    expect(getNames()).toEqual([
      "Motorola XOOM\u2122 with Wi-Fi",
      "Motorola XOOM\u2122"
      ]);

    element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

    expect(getNames()).toEqual([
      "Motorola XOOM\u2122",
      "Motorola XOOM\u2122 with Wi-Fi"
      ]);

    query.clear();
    query.sendKeys('nex');

    element(by.model('orderProp')).element(by.css('option[value="age"]')).click();

    expect(getNames()).toEqual([
      "Nexus S",
      "Motorola XOOM\u2122 with Wi-Fi",
      "Motorola XOOM\u2122"
      ]);
    });
  });
});
