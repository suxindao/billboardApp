/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.directives', [])


  .directive('lightslide', function () {
    return {
      restrict: 'ACE',
      template: '<li data-thumb="{{photo.thumbnail}}"><img ng-src="{{photo.fullres}}"/></li>',
      replace: true,
      link: function (scope, element, attrs) {
        if (scope.$last) {
          element.parent().lightSlider({
            gallery: true,
            item: 1,
            thumbItem: 9,
            slideMargin: 0,
            speed: 500,
            auto: true,
            loop: true,
            onSliderLoad: function () {
              $('#image-gallery').removeClass('cS-hidden');
            }
          });
        }
      }
    };
  })

//  .directive('lightslide', function () {
//    return {
//      restrict: 'A',
//      link: function (scope, element, attrs) {
//        if (scope.$last) {
//          element.parent().lightSlider({
//            gallery: true,
//            item: 1,
//            thumbItem: 9,
//            slideMargin: 0,
//            speed: 500,
//            auto: true,
//            loop: true,
//            onSliderLoad: function () {
//              $('#image-gallery').removeClass('cS-hidden');
//            }
//          });
//        }
//      }
//    };
//  })

  .directive('lightgallery', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (scope.$last) {
          element.parent().lightGallery();
        }
      }
    };
  });