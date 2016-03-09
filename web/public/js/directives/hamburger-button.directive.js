app.directive('hamburgerButton', function(){
  return {
      restrict: 'AE',
      scope: {},
      link: function(scope, element, attrs){

        $(document).on('scroll', function(){
          if (!element.hasClass('collapsed')){
            element.click();
          }
        });

        element.on('click', function(){
          element.hasClass('collapsed') ? element.addClass('is-active') : element.removeClass('is-active');
        });
      }
  }
});
