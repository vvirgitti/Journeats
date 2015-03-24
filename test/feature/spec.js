describe('Journeats App', function() {

  describe('Loading the page', function() {
    it('', function() {
      browser.get('http://localhost3000');
      expect(browser.getTitle()).toEqual('JournEats')
    });
  });

});