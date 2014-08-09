angular.module('o8')

  .directive('loginform', function(){
    return {
      restrict: 'E',
      scope : {
        env : '='
      },
      replace : true,
      templateUrl : '/scripts/comps/loginform/loginform.html',
      controller: function($scope, $injector, $attrs, $window) {
        var service = $injector.get($attrs.service);
        var path = $attrs.path || '/' ;
        $scope.submit = function(form) {
          delete $scope.error;
          service.login($scope.credentials,
            function (res) {
              if($scope.env === 'local') {
                console.log('Login Succes', res);       
              } else {
                $window.location = path
              }
            }, function (res) {
              debugger;
              $scope.error = res.data.error.message;
            });
        };
      }
    }
  });
