(function($) {

  $.fn.majesty = function() {

    var findMatches = function(searchValue, elements) {
      // Hack for now. Probably use regex later
      filtered = elements.filter(function() {
        values = $(this).data('depends-value').split(',');
        for(var i=0; i < values.length; i++) {
          if($.trim(values[i]) == searchValue) {
            return true;
          }
        }
      });
      return filtered;
    };

    return this.each(function() {

      self = $(this);
      dependents = self.find('[data-depends-on]');
      dependents.hide();

      self.on('change', 'select', function(e) {
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
