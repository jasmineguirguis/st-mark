app.directive('fixedShareBox', function(){
  return {
    restrict: 'AE',
    scope: {},
    link: function(scope, element, attrs){

      var passed = false;
      $(document).on('scroll', function(){
        var width = this.body.clientWidth;
        var height = this.body.clientHeight;
        var topScroll = this.body.scrollTop;

        if (topScroll > 81 && !passed){
          passed = true;
          var height = element[0].clientHeight;
          element.css({
            position: 'fixed',
            width: width,
            top: 0,
            left: 0
          });

          $('body').css({ marginTop: height + 20 });

        } else if (topScroll < 81){
          passed = false;
          element.css({ position: 'static', width: '100%' });
          $('body').css({ marginTop: 0 });
        }
      });

    }
  }
});
