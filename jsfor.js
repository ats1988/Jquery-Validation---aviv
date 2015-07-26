$(document).ready(function () {


//jQuery

var Fieldelmnt = $('input,textarea'),
errorM = '';
$(Fieldelmnt).on('keyup blur', function () {

var Thiselmnt = $(this);
if (Thiselmnt.attr('required')) {

errorM = Thiselmnt.attr('data-error-message');

if (Thiselmnt.val().length > 0) {
Thiselmnt.parent('div').addClass('fill_INTO_THE_Start');
if (Thiselmnt.next('.Error_now')) {
Thiselmnt.next('.Error_now').remove();
}
} else {
Thiselmnt.parent('div').removeClass('fill_INTO_THE_Start');
if (Thiselmnt.next('.Error_now').length == 0) {
Thiselmnt.parent('div').append('<div class="Error_now">' + errorM +
'</div>');
}
}
}


if (Thiselmnt.attr('type') == 'email') {
if (
!Thiselmnt.val()
.toLowerCase()
.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)
) {
if (Thiselmnt.next('.Error_now').length == 0) {
errorM = 'Please Enter Your Valid Email Id';
Thiselmnt.parent('div')
.append('<div class="Error_now">' + errorM + '</div>');
}
}
}



if (Thiselmnt.attr('type') == 'tell') {
if (!Thiselmnt.val()
.toLowerCase()
.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\) [\-]*)|([0-9]{2,4})[ \-]*)*?[0-9]
{3,4}?[ \-]*[0-9]{3,4}?$/)) {
if (Thiselmnt.next('.Error_now').length == 0) {
errorM = 'Please Enter Your Valid Phone no';
Thiselmnt.parent('div')
.append('<div class="Error_now">' + errorM + '</div>');
}
}
}

$(':submit').on('click', function () {
var Fieldelmnt = $(this).parents('form').find($('input,textarea')),
success = true;
Fieldelmnt.each(function () {
if ($(this).val() == '') {
Fieldelmnt.each(function () {
$(this).focus()
});
success = false;
}
});
if (success == true) {
$(this).parents('form').submit();
}



});
