
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
      $menuToggle     = $sidebar.find('.first.checkbox'),
      $buttonToggle   = $sidebar.find('.second.checkbox'),
      $minimalToggle  = $sidebar.find('.third.checkbox'),
      $blockToggle    = $sidebar.find('.fourth.checkbox'),
      $ribbonToggle   = $sidebar.find('.fifth.checkbox'),
      $themeDropdown  = $sidebar.find('.theme.dropdown'),

      previousClass,
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
      .checkbox('uncheck')
      .checkbox({
        onChecked: function() {
          $('.wide.column').parent().append($('.wide.column'));
          $('.vertical.tabular.menu').removeClass('right');
        },
        onUnchecked: function() {
          $('.wide.column').parent().prepend($('.wide.column'));
          $('.vertical.tabular.menu').addClass('right');
        }
      })
    ;
    $buttonToggle
      .checkbox('uncheck')
      .checkbox({
        onChange: function(layout) {
          $('.forked.repo.icon')
            .closest('.button')
            .toggleClass('secondary')
          ;
          $('.star.icon')
            .closest('.button')
            .toggleClass('labeled icon')
          ;
          $('.cloud.download').closest('.button').toggleClass('green');
        }
      })
    ;
    $minimalToggle
      .checkbox('uncheck')
      .checkbox({
        onChecked: function() {
          $('.column .vertical.menu')
            .removeClass('tabular')
            .addClass('secondary')
          ;
          $('.ui.table')
            .prev()
            .attr('class', 'ui bottom attached latest segment')
          ;
        },
        onUnchecked: function() {
          $('.column .vertical.menu')
            .addClass('tabular')
            .removeClass('secondary')
          ;
          $('.ui.table')
            .prev()
            .attr('class', 'ui attached latest segment')
          ;
        },
        onChange: function(layout) {
          $('.ui.table')
            .toggleClass('very basic')
          ;
          $('.git.compare')
            .closest('.button')
              .toggleClass('green positive')
          ;
          $('.column .ui.button').toggleClass('basic');
        }
      })
    ;
    $blockToggle
      .checkbox('uncheck')
      .checkbox({
        onChecked: function() {
          previousClass = $('.column .vertical.menu').attr('class');
          $('.column .vertical.menu')
            .attr('class', 'ui fluid vertical repo menu')
            .find('.divider').attr('style', 'display:none')
          ;
        },
        onUnchecked: function() {
          if(previousClass) {
            $('.column .vertical.menu')
              .attr('class', previousClass)
              .find('.divider').removeAttr('style')
            ;
          }
        }
      })
    ;


    $ribbonToggle
      .checkbox('uncheck')
      .checkbox({
        onChecked: function() {
          $('.column .vertical.menu').attr('style', 'display: none;');
          $('.alternate.menu').attr('style', 'display: block;');
        },
        onUnchecked: function() {
          $('.column .vertical.menu').removeAttr('style');
          $('.alternate.menu').removeAttr('style');
        }
      })
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
            $themeDropdown.dropdown('set value', theme);
          }
        }
      })
      .dropdown('set selected', 'github')
    ;


  })
;