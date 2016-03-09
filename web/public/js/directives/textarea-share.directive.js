app.directive('textareaShare', function(){
  return {
      restrict: 'AE',
      scope: { in: '=' },
      link: function(scope, element, attrs){

        element.on('focus', function(){
          element[0].rows = 3;
          scope.in = true;
          scope.$apply();
        }); // expand

        element.on('focusout', function(){
          if (!element.val()) {
            element[0].rows = 1;
            scope.in = false;
            scope.$apply();
          }
        }); // collapse

      }
  }
});
