/**
 * Created by matthewahlberg on 6/10/15.
 */
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$('.bs-example-tooltips button').tooltip();

$('.bs-popover-example button').popover();
