$(document).ready(function(){
    $(".sidenav").sidenav();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
  });

$('.chips-autocomplete').chips({
    autocompleteOptions: {
      data: {
        'Tools': null,
        'Housewares': null,
        'Wall-mounted': null,
        'Equipment': null
      },
      limit: Infinity,
      minLength: 1
    }
  });