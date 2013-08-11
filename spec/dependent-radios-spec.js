describe('dependent radios', function() {

  beforeEach(function() {
    loadFixtures('radio-fixture.html');
    $('#myContainer').majesty();
    $('#radio2').change();
  });

  it('shows the correct content', function() {
    expect($('#d1')).toBeHidden();
    expect($('#d2')).toBeVisible();
  });
});
