
/*******************************
           Theme JS
*******************************/

/*
  This is boilerplate to show initializing components
  The way this is wrapped will vary by platform/framework
*/

$(document)
  .ready(function() {


    var
      $sidebar      = $('.ui.sidebar'),
      $launcher     = $('.launch'),
      $css          = $('link.themable'),
      $dropdown     = $sidebar.find('.ui.dropdown'),

      regExp = /(\/components\/).*(\/[a-z]*.css)/
    ;


    $sidebar
      .sidebar({
        transition: 'push',
        dimPage: false
      })
      .sidebar('attach events', $launcher)
    ;

    $dropdown
      .dropdown({
        onChange: function(value) {
          var
            type = $(this).attr('name') || false
          ;
          $.each($css, function() {
            var
              currentHREF = $(this).attr('href'),
              newHREF     = currentHREF.replace(regExp, '$1' + value + '$2')
            ;
            if(type == 'global' || currentHREF.search(type) !== -1) {
              $(this).attr('href', newHREF);
            }
          });
          // make other dropdown match
          if(type == 'global') {
            $dropdown.dropdown('set value', value);
          }
        }
      })
      .dropdown('set selected', 'github')
    ;


  })
;