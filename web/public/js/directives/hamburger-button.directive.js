app.directive('hamburgerButton', function(){
  return {
      restrict: 'AE',
      scope: {},
      link: function(scope, element, attrs){
        element.on('click', function(){
          if (element.hasClass('collapsed')){
            element.addClass('is-active');
          } else {
            element.removeClass('is-active');
          }
        })
      }
  }
});
