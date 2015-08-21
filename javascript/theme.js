
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
      $sidebar        = $('.ui.sidebar'),
      $launcher       = $('.launch'),
      $css            = $('link.themable'),
      $menuToggle     = $sidebar.find('.checkbox[name="menu"]'),
      $buttonToggle   = $sidebar.find('.checkbox[name="button"]'),
      $themeDropdown  = $sidebar.find('.theme.dropdown'),

      regExp = /(\/components\/).*(\/[a-z]*.css)/
    ;


    $sidebar
      .sidebar({
        transition: 'push',
        dimPage: false
      })
      .sidebar('attach events', $launcher)
    ;

    $menuToggle
      .checkbox({
        onEnable: function() {
          $('.wide.column').parent().append($('.wide.column'));
          $('.vertical.tabular.menu').removeClass('right');
        },
        onDisable: function() {
          $('.wide.column').parent().prepend($('.wide.column'));
          $('.vertical.tabular.menu').addClass('right');
        }
      })
    ;
    $buttonToggle
      .checkbox({
        onChange: function(layout) {
          $('.forked.repo.icon')
            .closest('.button')
            .toggleClass('primary')
            .prev()
              .toggleClass('labeled icon')
          ;
        }
      })
      .dropdown('set selected', 'default')
    ;



    $themeDropdown
      .dropdown({
        onChange: function(theme) {
          var
            type = $(this).attr('name') || false
          ;
          $.each($css, function() {
            var
              currentHREF = $(this).attr('href'),
              newHREF     = currentHREF.replace(regExp, '$1' + theme + '$2')
            ;
            if(type == 'global' || currentHREF.search(type) !== -1) {
              $(this).attr('href', newHREF);
            }
          });
          // make other dropdown match
          if(type == 'global') {
            $dropdown.dropdown('set value', theme);
          }
        }
      })
      .dropdown('set selected', 'github')
    ;


  })
;