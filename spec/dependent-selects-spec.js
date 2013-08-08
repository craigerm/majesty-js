describe('dependent selects', function() {

  areas = null;

  beforeEach(function() {
    loadFixtures('select-fixture.html');
    $('#myContainer').majesty();
    areas = $('[data-depends-on]');
  });

  it('has 2 dependents', function() {
    expect(areas).toHaveLength(2);
  });

  it('should hide all dependent areas by default', function() {
    expect(areas).toBeHidden();
  });

  describe('changing select', function() {

    beforeEach(function() {
      $('select[name=status]').val('val2').change();
    });

    it('shows the correct content', function() {
      expect($('#d1')).toBeHidden();
      expect($('#d2')).toBeVisible();
    });

    it('hides everything if changing again to a missing value', function() {
      $('select[name=status]').val('val3').change();
      expect(areas).toBeHidden();
    });
  });
});
