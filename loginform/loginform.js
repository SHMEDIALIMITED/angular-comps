angular.module('o8')

  .directive('loginform', function(){

    return {
      restrict: 'E',
      scope : {

      },
      replace : true,
      templateUrl : '/scripts/comps/loginform/loginform.html',
      controller: function($scope, $injector, $attrs, $window) {

        var service = $injector.get($attrs.service);

        $scope.credentials = {
          email: 'p@w.com',
          password : '1234'
        };


        $scope.submit = function(form) {

          delete $scope.error;

          service.login($scope.credentials,
            function (res) {
              $window.location = '/web';
            }, function (res) {

              $scope.error = res;
            })
        }

      }

    }

  });
