(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($scope, $state) {

      var publicInterface;

      //----Functions
      function login(){
        $state.go('terms');
      }

      //----Accessors

      //----Modifiers

      //----INTO SCOPE:
      publicInterface = {
        login: login
      };

      angular.extend($scope, publicInterface);


    }
})();
