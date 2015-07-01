angular.module('gmp.gmp-button', [])
  .directive('gmpButton', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'gmp-button-template.html',
      link: function(scope, element){
      }
    };
  });
