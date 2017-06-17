(function () {
  angular.module('notinphillyServerApp')
    .controller('SignupProgressController', [ '$scope', function ($scope) {

      $scope.currentStep = $scope.User.status || 1; 

    }]);
})();
