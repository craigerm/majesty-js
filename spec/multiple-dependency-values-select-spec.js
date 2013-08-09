describe('multiple dependent values for selects', function() {

  areas = null;

  beforeEach(function() {
    loadFixtures('multiple-depends-select-fixture.html');
    $('#myContainer').majesty();
    areas = $('[data-depends-on]');
    $('select[name="status"]').val('val2').trigger('change');
  });

  it('shows dependents if it matches any item in list', function() {
    expect($('#d2')).toBeVisible();
    expect($('#d2')).toBeVisible();
  });

  it('hides non matched items', function() {
    expect($('#d1')).toBeHidden();
    expect($('#d4')).toBeHidden();
  });

  it('allows whitespace around value', function() {
    expect($('#d5')).toBeVisible();
  });
});
