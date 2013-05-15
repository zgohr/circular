'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {
  }])
  .controller('MyCtrl2', [function() {
  }])
  .controller('LoginCtrl', ['$scope',
                            '$location',
                            'angularFire',
                            function($scope, $location, angularFire) {
    var auth;

    $scope.logout = function() {
      auth.logout();
    };

    $scope.register = function() {
      var ref = 'angular-flat-seed.firebaseio.com';  // TODO
      var firebase = new Firebase(ref);

      auth = new FirebaseAuthClient(firebase, function (error, user) {
        if (!error && user) {
          $scope.$apply(function(){
            $scope.logged = true;
          });
          // user.email, user.firebaseAuthToken, user.hash, user.id, user.provider
        } else {
          $scope.logged = false;
        }
      });
      auth.login('persona');
    };

  }]);
