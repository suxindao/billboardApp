/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers', [])

  .controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {username: "user", password: "111111"};
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
      machineID: "3B4GdF7S3T",
      showInputText: true
    };

    $scope.match = function () {
      $scope.data.showInputText = false;
    };

    $scope.reMatch = function () {
      $scope.data.showInputText = true;
    };

    $scope.goMainPage = function () {
      $state.go('main');
    };
  })

  .controller('MainCtrl', function ($scope, $ionicActionSheet, $timeout, $sce, $state) {
    //http://plnkr.co/edit/nntLVOV58NmXbmB6LcIB?p=preview

    $scope.data = {
      photos: [
        {
          fullres: 'img/cS-1.jpg',
          thumbnail: 'img/thumb/cS-1.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-2.jpg',
          thumbnail: 'img/thumb/cS-2.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-3.jpg',
          thumbnail: 'img/thumb/cS-3.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-4.jpg',
          thumbnail: 'img/thumb/cS-4.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-5.jpg',
          thumbnail: 'img/thumb/cS-5.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-6.jpg',
          thumbnail: 'img/thumb/cS-6.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-7.jpg',
          thumbnail: 'img/thumb/cS-7.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-8.jpg',
          thumbnail: 'img/thumb/cS-8.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-9.jpg',
          thumbnail: 'img/thumb/cS-9.jpg',
          message: "aaaa"
        },
        {
          fullres: 'img/cS-10.jpg',
          thumbnail: 'img/thumb/cS-10.jpg',
          message: "aaaa"
        }
      ]
    };
    for (var i = 0; i < $scope.data.photos.length; i++) {
      $scope.data.photos[i].fullres = $sce.trustAsResourceUrl($scope.data.photos[i].fullres);
    }

    $scope.showMenu = function () {
      var hideSheet = $ionicActionSheet.show({
        titleText: '操作',
        buttons: [
          {text: '立即发布'},
          {text: '删除节目'}
        ],
        destructiveText: 'Delete',
        cancelText: '取消编辑',
        cancel: function () {
          // add cancel code..
        },
        destructiveButtonClicked: function () {
          alert("你确定要删除吗?");
        },
        buttonClicked: function (index) {
          alert(index);
          return true;
        }
      });
      $timeout(function () {
        hideSheet();
      }, 2000);
    };

    $scope.userAccount = function () {
      $state.go('account');
    };


//    $('#image-gallery').lightSlider({
//      gallery: true,
//      item: 1,
//      thumbItem: 9,
//      slideMargin: 0,
//      speed: 500,
//      auto: true,
//      loop: true,
//      onSliderLoad: function () {
//        $('#image-gallery').removeClass('cS-hidden');
//      }
//    });

  })

  .controller('AccountCtrl', function ($scope, $state) {
    $scope.data = {};
  });
