//this is a fix for bootstrap to allow the nav to collapse after a link is clicked
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }
});

//this prevents the nav logout link staying selected after a click
$("nav a").mouseup(function(){
    $(this).blur();
})