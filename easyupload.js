(function ($) {
    Drupal.behaviors.autoUpload = {
        attach: function (context, settings) {
            $('form', context).on('change', 'input.form-file', function() {
                $(this).next('.form-submit').mousedown();
            });
        }
    };
})(jQuery);
