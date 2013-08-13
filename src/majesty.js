(function($) {

  var findDependents = function(rootElement) {
    return rootElement.find('[data-depends-on]');
  };

  var findMatches = function(searchValue, elements) {

    searchValue = $.trim(searchValue);

    if(searchValue === '') {
      return $([]);
    }

    // Hack for now. Probably use regex later
    filtered = elements.filter(function() {

      var dependsValue = $(this).data('depends-value');

      if (dependsValue === '*') {
        return true;
      }

      var values = dependsValue.split(',');

      for(var i=0; i < values.length; i++) {
        if($.trim(values[i]) == searchValue) {
          return true;
        }
      }
    });
    return filtered;
  };

  $.fn.majesty = function() {

    return this.each(function() {

      self = $(this);
      dependents = findDependents(self);
      dependents.hide();

      self.on('change', 'select, input:radio', function(e) {
        target = $(e.currentTarget);
        name = target.attr('name');
        val = target.val();
        potential = dependents.filter('[data-depends-on=' + name + ']');
        matched = findMatches(val, potential);
        potential.hide();
        matched.show();
      });
    });
  };
})(jQuery);
