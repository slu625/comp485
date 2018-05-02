$(function() {
    $('[data-role="dismiss"]').click(function () {
        var uid = $(this).data('dismiss');

        $('[data-uid="' + uid + '"]').toggle();
    });
});
