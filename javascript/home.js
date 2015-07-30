
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


    $popup
      .popup({
        duration: 0,
        variation: 'small inverted',
        preserve: true
      })
    ;

    $addDropdown
      .dropdown({
        transition : 'drop',
        action     : 'hide'
      })
    ;

    $userDropdown
      .dropdown({
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