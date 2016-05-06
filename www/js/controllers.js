/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers', [])

  .controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function () {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
        $state.go('match');
      }).error(function (data) {
        var alertPopup = $ionicPopup.alert({
          title: '登录失败',
          template: '输入的密码错误！请重新输入！'
        });
      });
    }
  })

  .controller('MatchCtrl', function ($scope, $state) {
    $scope.data = {
      matchButton: {
        hide: false
      },
      nextButton: {
        hide: true
      }

    };

    $scope.match = function () {
      $scope.data.matchButton.hide = true;
      $scope.data.nextButton.hide = false;
    };

    $scope.goMainPage = function () {
      $state.go('main');
    };

  })

  .controller('MainCtrl', function ($scope, $sce) {
    //http://plnkr.co/edit/nntLVOV58NmXbmB6LcIB?p=preview

    $scope.data = {
      photos: [
        {
          fullres: 'img/thumb-1.jpg',
          thumbnail: 'img/thumb-1.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/thumb-2.jpg',
          thumbnail: 'img/thumb-2.jpg',
          message: "bbb"
        },
        {
          fullres: 'img/thumb-3.jpg',
          thumbnail: 'img/thumb-3.jpg',
          message: "ccc"
        },
        {
          fullres: 'img/thumb-4.jpg',
          thumbnail: 'img/thumb-4.jpg',
          message: "dddd"
        }
      ]
    };

    for (var i = 0; i < $scope.data.photos.length; i++) {
      $scope.data.photos[i].fullres = $sce.trustAsResourceUrl($scope.data.photos[i].fullres);
    }

  })

  .controller('AccounrCtrl', function ($scope, $state) {
    $scope.data = {};

  })

  ;
