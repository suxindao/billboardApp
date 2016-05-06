/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.directives', [])

  .directive('lightgallery', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (scope.$last) {
          element.parent().lightGallery({
            download: false
          });
        }
      }
    };
  });