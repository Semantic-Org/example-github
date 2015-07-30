
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
      $popup        = $('[data-content]')
    ;

    // always hide popup when dropdown shows
    $.fn.dropdown.settings.onShow = function() {
      $('body').popup('hide all');
    };

    $popup
      .popup({
        duration : 0,
        delay    : {
          show : 50,
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
        transition: 'scale',
        onChange: function(value) {
          console.log('New watch value', value);
        }
      })
    ;

  })
;