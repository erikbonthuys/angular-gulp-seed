(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('DashController', DashController);

    /** @ngInject */
    function DashController($scope) {

      var publicInterface;

      var variable1 = "E";

      //----Functions
      function clickme(){
        variable1 = "Erik";
        $scope.loggedin = "false";
      }

      //----Accessors
      function getVariable1(){
        return variable1;
      }

      //----Modifiers

      //----INTO SCOPE:
      publicInterface = {
        clickme: clickme,
        getVariable1: getVariable1
      };

      angular.extend($scope, publicInterface);

    }
})();
