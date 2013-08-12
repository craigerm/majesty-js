describe('dependent selects', function() {

  beforeEach(function() {
    loadFixtures('global-match-fixture.html');
    $('#myContainer').majesty();
    $('select[name=status]').val('val2').change();
  });

  it('show any options that have value *', function() {
    expect($('#d1')).toBeVisible();
    expect($('#d2')).toBeHidden();
    expect($('#d3')).toBeVisible();
  });

  it('hides all dependents when empty option is selected', function() {
    $('select[name=status]').val('').change();
    expect($('#d1')).toBeHidden();
    expect($('#d2')).toBeHidden();
    expect($('#d3')).toBeHidden();
  });
});

