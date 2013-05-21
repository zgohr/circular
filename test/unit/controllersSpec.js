'use strict';

/* jasmine specs for controllers go here */

describe('Controllers', function(){
  beforeEach(module('myApp'));

  describe('LoginCtrl', function() {
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('LoginCtrl', {$scope: scope});
    }));

    it('should generate auth client', function() {
      scope.register();
      expect(scope.auth).toBeDefined();
      expect(scope.logged).toBeFalsy();
    });
  });
});
