
/*******************************
          Page JS
*******************************/

/*
  This is boilerplate to show initializing components
  The way this is wrapped will vary by platform/framework
*/

$(document)
  .ready(function() {


    var
      $userDropdown = $('.user.dropdown'),
      $addDropdown  = $('.add.dropdown'),
      $button       = $('.ui.button'),
      $watchButton  = $('.watch.button'),
      $search       = $('.page.header input'),
      $popup        = $('[data-content]')
    ;

    $.fn.dropdown.settings.onShow = function() {
      $('body').popup('hide all');
    };

    $popup
      .popup({
        duration : 0,
        delay    : {
          show : 10,
          hide : 0
        },
        variation : 'inverted',
        position  : 'bottom center'
      })
    ;

    $addDropdown
      .dropdown({
        duration   : 0,
        action     : 'hide'
      })
    ;

    $userDropdown
      .dropdown({
        duration   : 0,
        transition : 'drop',
        action     : 'hide'
      })
    ;

    $watchButton
      .dropdown({
        allowTab: false,
        transition: 'scale',
        onChange: function(value) {
          console.log('New watch value', value);
        }
      })
    ;

    // Focus wrapper
    $search
      .on('focus', function() {
        $(this).closest('.input').addClass('focused');
      })
      .on('blur', function() {
        $(this).closest('.input').removeClass('focused');
      })
    ;


  })
;