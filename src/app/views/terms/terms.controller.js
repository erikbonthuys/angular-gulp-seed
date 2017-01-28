(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('TermsController', TermsController);

    /** @ngInject */
    function TermsController($scope, $state) {

      var publicInterface;

      //----Functions

      function accept(){
        $state.go('dashboard');
      }

      //----Accessors


      //----Modifiers

      //----INTO SCOPE:
      publicInterface = {
        accept: accept
      };

      angular.extend($scope, publicInterface);

    }
})();
