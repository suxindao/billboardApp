/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.services', [])

  .service('LoginService', function ($q) {
    return {
      loginUser: function (name, pw) {
        var deferred = $q.defer();
        var promise = deferred.promise;

        if (name == 'user' && pw == 'secret') {
          deferred.resolve('Welcome ' + name + '!');
        } else {
          deferred.reject('Wrong credentials.');
        }
        promise.success = function (fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function (fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
      }
    }
  })
  ;
