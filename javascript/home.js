
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
      $watchButton  = $('.watch.button')
    ;

    $userDropdown
      .dropdown({
        action: 'hide'
      })
    ;

    $watchButton
      .dropdown({
        transition: 'scale',
        onChange: function(value) {
          alert('User now set to ' , value);
        }
      })
    ;

  })
;