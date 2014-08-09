angular.module('o8')

  .directive('signupform', function(){

    return {
      restrict: 'E',
      scope : {

      },
      replace : true,
      templateUrl : '/scripts/comps/signupform/signupform.html',
      controller: function($scope, $injector, $attrs, $location) {

        var service = $injector.get($attrs.service);
        var path = $attrs.path;


        $scope.user = {

        };


        $scope.submit = function(form) {
          delete $scope.error;
          delete $scope.user.passwordConfirm;

          service.create($scope.user,
            function (res) { 
              $location.path(path);
            }, function (res) {
              $scope.error = res;
            })
        }

      }

    }

  });
