(function($) {

  $.fn.majesty = function() {

    return this.each(function() {

      self = $(this);
      dependents = self.find('[data-depends-on]');
      dependents.hide();

      self.on('change', 'select', function(e) {
        target = $(e.currentTarget);
        name = target.attr('name');
        val = target.val();
        potential = dependents.filter('[data-depends-on=' + name + ']');
        matched = potential.filter('[data-depends-value="' + val + '"]');
        potential.hide();
        matched.show();
      });
    });
  };
})(jQuery);
