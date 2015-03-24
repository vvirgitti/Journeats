describe('Journeats App', function() {

  describe('Loading the page', function() {
    it('Should have a title', function() {
      browser.get('http://localhost:3000');
      expect(browser.getTitle()).toEqual('Journeats');
    });
  });

});