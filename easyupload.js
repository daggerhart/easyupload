(function ($) {
    Drupal.behaviors.autoUpload = {
        attach: function (context, settings) {
            $('form', context).on('change', 'input.form-file', function() {
                $(this).closest('.form-item').find('.form-submit').mousedown();
            });
        }
    };
})(jQuery);
