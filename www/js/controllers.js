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

  .controller('MainCtrl', function ($scope, $state) {
    $scope.data = {};

  })

  .controller('AccounrCtrl', function ($scope, $state) {
    $scope.data = {};

  })

  ;
